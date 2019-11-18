require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  STRIPE_KEY
} = process.env;
const appController = require("./controllers/appController");
const authController = require("./controllers/authController");
const purchController = require("./controllers/purchController");
const reviewController = require("./controllers/reviewController");
const streamController = require("./controllers/streamController");
const userController = require("./controllers/userController");
const auth = require("./middleware/authMiddleware");
var nodemailer = require("nodemailer");
const creds = require("../emailconfig");
const stripe = require("stripe")(STRIPE_KEY);
const uuid = require("uuid/v4");

app.use(express.json());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database is up and running!");
});

// ENDPOINTS
// AUTH ENDPOINTS
// prettier-ignore
app.post(`/auth/user/new`, authController.register, appController.createRegisterApp); //this will be for registering
app.post(`/auth/user/login`, authController.login); //login
app.post(`/auth/user/logout`, authController.logout); //logout

// // USER ENDPOINTS
app.get(`/admin/user/list`, auth.adminsOnly, userController.getAllUsers); // returning all users for admin page
// prettier-ignore
app.get(`/admin/user/streamers`, auth.adminsOnly, userController.getAllStreamers) // INNER JOIN returns all streamers for admin page
app.get(`/admin/user/:userId`, auth.adminsOnly, userController.getOneUser); // this will be for admins to view single user profile
app.get(`/auth/user/`, auth.usersOnly, userController.viewProfile); // this will be for users to view their profile based on session
// app.put(`/admin/user/edit/:userId`, adminsOnly, userController.editUserAdmin) // admin can edit status of users
app.put(`/auth/user/edit/`, auth.usersOnly, userController.editProfile); // for user to edit profile info on session

// // APPLICATION ENDPOINTS
app.get(`/api/app`, auth.adminsOnly, appController.getAllApps); // only admins can view all apps
app.get(`/api/app/pending`, auth.adminsOnly, appController.getPendingApps); // shows pending approval apps
app.post(`/api/app`, auth.usersOnly, appController.createApp); // only users create new application
// app.put(`/api/app/approve/:appId`, appController.approve); // admin will change user status to streamer and then delete application
// app.put(`/api/app/decline/:appId`, appController.decline) // admin will NOT change user status to streamer and then delete application

// // STREAM ENDPOINTS
// prettier-ignore
app.get(`/api/streams/pending`, auth.usersOnly, streamController.getPendingStreams); // streams by user that are pending approval
// prettier-ignore
app.get(`/api/streams/approved`, auth.usersOnly, streamController.getApprovedStreams); // get all created streams by user that are approved
// prettier-ignore
app.put(`/api/streams/:streamId`, auth.usersOnly, streamController.editPendingStream) // user edits stream they created
// prettier-ignore
app.put(`/api/admin/streams/:streamId`, auth.adminsOnly, streamController.adminEditPendingStream) // admin approves stream
app.get(`/api/stream`, auth.adminsOnly, streamController.getAllStreams); // get list of all streams
// prettier-ignore
app.get(`/api/streams/:streamId`, auth.adminsOnly, streamController.getOneStream); //get one stream
app.post(`/api/streams`, auth.usersOnly, streamController.createStream); // user creates stream
// prettier-ignore
app.delete(`/api/streams/:streamId`, auth.usersOnly, streamController.deleteStream) // user can delete stream not yet matched

// // PURCHASES ENDPOINTS
// prettier-ignore
app.get(`/api/purchases/user`, auth.usersOnly, purchController.getUserPurchases) // get list of all purchased streams by user
// prettier-ignore
app.get(`/api/purchases/user/:streamId`, auth.usersOnly, purchController.getUserPurchase); // get one purchase receipt for user
app.get(`/api/purchases`, auth.adminsOnly, purchController.getAllPurchases); // admin sees all purchases
app.post(`/api/purchases`, auth.usersOnly, purchController.createPurchase); // buy one ticket

// // REVIEWS ENDPOINTS
// app.post(`/api/reviews`, reviewController.add); //user can add review
// app.get(`/api/reviews/:streamerId`, reviewController.getAll); // get reviews for an streamer
// app.put(`/api/reviews/:streamerId/:reviewId`, reviewController.edit); // user can edit their review
// app.delete(`/api/reviews/:streamerId/:reviewId`, reviewController.delete); // user or admin can delete review

// Nodemailer setup
var transport = {
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: "pat@wandercast.co", //Change to email address that you want to receive messages on
    subject: "Contact us request",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

app.post("/send/welcome", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  // var message = req.body.message;
  // var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: "support@wandercast.co",
    to: email, //Change to email address that you want to receive messages on
    subject: "Welcome!",
    text: `Welcome ${name} to WanderCast!`
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

app.post("/send/purchase", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var title = req.body.title;
  var price = req.body.price;
  // var message = req.body.message;
  // var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: "support@wandercast.co",
    to: email, //Change to email address that you want to receive messages on
    subject: "Thank you for your purchase!",
    text: `Thank you ${name} for your business! 
    This email confirms that you purchased ${title} for a total $${price} usd. 
    Thank you. This is definitely not a scam :)`
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

//STRIPE

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { streamPrice, token, streamTitle } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: streamPrice * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased ${streamTitle}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }
  res.json({ error, status });
});

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on ${SERVER_PORT}`)
);
