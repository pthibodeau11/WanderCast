module.exports = {
  usersOnly: (req, res, next) => {
    // function checks to see if there is user object on req.session
    if (!req.session.user) {
      return res.status(401).send("Please log in");
    }
    next();
  },
  adminsOnly: (req, res, next) => {
    console.log(req.session.user);
    if (!req.session.user.isAdmin) {
      return res.status(403).send("You are not an admin");
    }
    next();
  }
};
