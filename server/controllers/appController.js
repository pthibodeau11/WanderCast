module.exports = {
  getAllApps: async (req, res) => {
    const allApps = await req.app.get("db").apps.get_all_apps();
    return res.status(200).send(allApps);
  },
  getPendingApps: async (req, res) => {
    const pending = await req.app.get("db").apps.get_pending_apps();
    return res.status(200).send(pending);
  },
  createApp: async (req, res) => {
    const { userId } = req.session.user;
    const {
      user_bio,
      user_experience,
      user_equipment,
      user_availability,
      user_portfolio_link,
      user_resume_link
    } = req.body;

    const newApp = await req.app
      .get("db")
      .apps.create_new_app(
        userId,
        user_bio,
        user_experience,
        user_equipment,
        user_availability,
        user_portfolio_link,
        user_resume_link,
        "false",
        "false"
      );
    return res.status(200).send(newApp);
  }
};
