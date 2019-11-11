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
  },
  createPurchase: async (req, res) => {
    const { userId } = req.session.user;
    const { stream_id, streamer_id, purchase_timestamp } = req.body;

    const newPurchase = await req.app
      .get("db")
      .purchases.create_new_purchase(
        stream_id,
        userId,
        streamer_id,
        purchase_timestamp
      );
    return res.status(200).send(newPurchase);
  }
};
