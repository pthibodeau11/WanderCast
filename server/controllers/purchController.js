module.exports = {
  getAllPurchases: async (req, res) => {
    const allPurchases = await req.app.get("db").purchases.get_all_purchases();
    return res.status(200).send(allPurchases);
  },
  getUserPurchase: async (req, res) => {
    const { userId } = req.session.user;
    const streamId = +req.params.streamId;
    const onePurchase = await req.app
      .get("db")
      .purchases.get_user_purchase(userId, streamId);

    return res.status(200).send(onePurchase);
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
    const {
      stream_id,
      streamer_id,
      purchase_price,
      purchase_timestamp
    } = req.body;

    const newPurchase = await req.app
      .get("db")
      .purchases.create_new_purchase(
        stream_id,
        userId,
        streamer_id,
        purchase_price,
        purchase_timestamp
      );
    return res.status(200).send(newPurchase);
  }
};
