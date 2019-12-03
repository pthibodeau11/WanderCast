const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res, next) => {
    const {
      user_first_name,
      user_last_name,
      user_birth_date,
      user_profile_img,
      user_email,
      user_password
    } = req.body;
    const db = req.app.get("db");

    const foundUser = await db.auth.check_existing_user(user_email);

    if (foundUser[0]) {
      res.status(409).json({ message: "User already exists" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user_password, salt);

      const newUser = await db.auth.register_user(
        user_first_name,
        user_last_name,
        user_birth_date,
        user_profile_img,
        user_email,
        hash,
        "false",
        "false"
      );

      req.session.user = {
        userId: newUser[0].user_id,
        userFirstName: newUser[0].user_first_name,
        userLastName: newUser[0].user_last_name,
        isAdmin: newUser[0].isAdmin
      };

      res.status(200).json(req.session.user);
    }
    next();
  },
  login: async (req, res) => {
    const { user_email, user_password } = req.body;
    const db = req.app.get("db");

    const foundUser = await db.auth.check_existing_user(user_email);

    if (!foundUser[0]) {
      res.status(403).json({ message: "User not found" });
    } else {
      const isAuthenticated = bcrypt.compareSync(
        user_password,
        foundUser[0].hash
      );

      if (!isAuthenticated) {
        res.status(403).json({ message: "Incorrect password" });
      } else {
        req.session.user = {
          userId: foundUser[0].user_id,
          userFirstName: foundUser[0].user_first_name,
          userLastName: foundUser[0].user_last_name,
          isAdmin: foundUser[0].isadmin
        };
        res.status(200).json(req.session.user);
      }
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }
};
