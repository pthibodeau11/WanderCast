module.exports = {
  getAllUsers: async (req, res) => {
    const allUsers = await req.app.get("db").users.get_all_users();
    return res.status(200).send(allUsers);
  },
  getAllStreamers: async (req, res) => {
    const allStreamers = await req.app.get("db").users.get_all_streamers();
    return res.status(200).send(allStreamers);
  },
  getOneUser: async (req, res) => {
    const userId = +req.params.userId;
    const oneUser = await req.app.get("db").users.get_one_user(userId);

    return res.status(200).send(oneUser[0]);
  },
  viewProfile: async (req, res) => {
    const { userId } = req.session.user;
    console.log(userId);
    const oneUser = await req.app.get("db").users.get_one_user(userId);

    return res.status(200).send(oneUser);
  },

  editProfile: async (req, res) => {
    const { user_first_name, user_last_name, user_birth_date } = req.body;
    const { userId } = req.session.user;
    const oneUser = await req.app
      .get("db")
      .users.edit_profile([
        userId,
        user_first_name,
        user_last_name,
        user_birth_date
      ]);

    res.status(200).json(oneUser);
  }
  // editUserAdmin: async (req, res) => {

  // }
};
