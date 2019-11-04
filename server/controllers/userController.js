module.exports = {
  getAllUsers: async (req, res) => {
    const allUsers = await req.app.get("db").users.get_all_users();
    return res.status(200).send(allUsers);
  },
  getOneUser: async (req, res) => {
    const { user_id } = req.session.user_id;
    const oneUser = await req.app.get("db").users.get_one_user(user_id);

    return res.status(200).send(oneUser);
  }
  // editUser: async (req, res) => {

  // },
  // editUserAdmin: async (req, res) => {

  // }
};
