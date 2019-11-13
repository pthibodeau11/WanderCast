module.exports = {
  createStream: async (req, res) => {
    const { userId } = req.session.user;
    const {
      stream_title,
      stream_desc,
      stream_time,
      stream_hours,
      stream_category,
      stream_country,
      stream_street,
      stream_state,
      stream_city,
      stream_zip
    } = req.body;
    const newStream = await req.app
      .get("db")
      .streams.create_new_stream(
        userId,
        stream_title,
        stream_desc,
        stream_time,
        stream_hours,
        stream_category,
        stream_country,
        stream_street,
        stream_state,
        stream_city,
        stream_zip,
        null,
        "false"
      );

    return res.status(200).send(newStream);
  },
  getAllStreams: async (req, res) => {
    const allStreams = await req.app.get("db").streams.get_all_streams();
    return res.status(200).send(allStreams);
  },
  getOneStream: async (req, res) => {
    const streamId = +req.params.streamId;
    const oneStream = await req.app.get("db").streams.get_one_stream(streamId);

    return res.status(200).send(oneStream[0]);
  },
  getApprovedStreams: async (req, res) => {
    const { userId } = req.session.user;
    const approvedStreams = await req.app
      .get("db")
      .streams.get_approved_streams(userId);

    return res.status(200).send(approvedStreams);
  },
  getPendingStreams: async (req, res) => {
    const { userId } = req.session.user;
    const pendingStreams = await req.app
      .get("db")
      .streams.get_pending_streams(userId);

    return res.status(200).send(pendingStreams);
  },
  editPendingStream: async (req, res) => {
    const {
      streamCategory,
      streamTitle,
      streamDesc,
      streamTime,
      streamHours,
      streamCountry,
      streamStreet,
      streamCity,
      streamState,
      streamZip
    } = req.body;
    const streamId = +req.params.streamId;
    await req.app
      .get("db")
      .streams.edit_stream(
        streamId,
        streamCategory,
        streamTitle,
        streamDesc,
        streamTime,
        streamHours,
        streamCountry,
        streamStreet,
        streamCity,
        streamState,
        streamZip
      );
    const pendingStreams = await req.app
      .get("db")
      .streams.get_pending_streams(streamId);
    console.log(pendingStreams);
    res.status(200).json(pendingStreams);
  },
  deleteStream: async (req, res) => {
    const streamId = +req.params.streamId;
    const streams = await req.app.get("db").streams.delete_stream(streamId);

    res.status(200).json(streams);
  }
};
