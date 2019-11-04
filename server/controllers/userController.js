module.exports = {
  getAllUsers: async (req, res) => {
    const allUsers = await req.app.get("db").users.get_all_users();
    return res.status(200).send(allUsers);
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
  }
  // editUser: async (req, res) => {

  // },
  // editUserAdmin: async (req, res) => {

  // }
};
