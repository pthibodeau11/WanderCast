require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const appController = require("./controllers/appController");
const authController = require("./controllers/authController");
const purchController = require("./controllers/purchController");
const reviewController = require("./controllers/reviewController");
const streamController = require("./controllers/streamController");
const userController = require("./controllers/userController");
const auth = require("./middleware/authMiddleware");

app.use(express.json());

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
app.post(`/auth/user/new`, authController.register); //this will be for registering
app.post(`/auth/user/login`, authController.login); //login
app.post(`/auth/user/logout`, authController.logout); //logout

// // USER ENDPOINTS
app.get(`/admin/user/list`, auth.adminsOnly, userController.getAllUsers); // returning all users for admin page
app.get(`/admin/user/:userId`, auth.adminsOnly, userController.getOneUser); // this will be for admins to view single user profile
app.get(`/auth/user/`, auth.usersOnly, userController.viewProfile); // this will be for users to view their profile based on session
// app.put(`/admin/user/edit/:userId`, adminsOnly, userController.editUserAdmin) // admin can edit status of users
// app.put(`/auth/user/edit/:userId`, usersOnly, userController.editUser); // edit user info/status in user profile OR admin page

// // APPLICATION ENDPOINTS
app.get(`/api/app`, auth.adminsOnly, appController.getAllApps); // only admins can view all apps
app.post(`/api/app`, auth.usersOnly, appController.createApp); // only users create new application
// app.put(`/api/app/approve/:appId`, appController.approve); // admin will change user status to streamer and then delete application
// app.put(`/api/app/decline/:appId`, appController.decline) // admin will NOT change user status to streamer and then delete application

// // STREAM ENDPOINTS
// app.get(`/api/stream`, streamController.getAll); // get list of all streams
// app.get(`/api/streams/:streamId`, streamController.getOne); //get one stream
// app.get(`/api/streams/:userId`, streamController.getAllPending) // get all created streams by user that are pending approval
// app.get(`/api/streams/:userId`, streamController.getAllApproved) // get all created streams by user that are approved
// app.post(`/api/streams`, streamController.createStream) // user creates stream
// app.put(`/api/streams/:streamId`, streamController.editStream) // user edits stream they created
// app.delete(`/api/streams/:streamId`, streamController.deleteStream) // user can delete stream not yet matched

// // PURCHASES ENDPOINTS
// app.get(`/api/purchases`, purchController.getAllAdmin) // admin sees all purchases
// app.get(`/api/purchases/:userId`, purchController.getAll) // get list of all purchased streams by user
// app.post(`/api/purchases`, purchController.purchase) // buy one ticket

// // REVIEWS ENDPOINTS
// app.post(`/api/reviews`, reviewController.add); //user can add review
// app.get(`/api/reviews/:eventId`, reviewController.getAll); // get reviews for an event
// app.put(`/api/reviews/:eventId/:reviewId`, reviewController.edit); // user can edit their review
// app.delete(`/api/reviews/:eventId/:reviewId`, reviewController.delete); // user or admin can delete review

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on ${SERVER_PORT}`)
);
