module.exports = {
  getAllPurchases: async (req, res) => {
    const allPurchases = await req.app.get("db").purchases.get_all_purchases();
    return res.status(200).send(allPurchases);
  },
  getUserPurchases: async (req, res) => {
    const { userId } = req.session.user;
    const userPurchases = await req.app
      .get("db")
      .purchases.get_user_purchases(userId);

    return res.status(200).send(userPurchases);
  }
};
