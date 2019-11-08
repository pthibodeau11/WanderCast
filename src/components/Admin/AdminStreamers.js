import React, { Component } from "react";
import { connect } from "react-redux";
import "./admin.css";
import { getAllStreamers } from "../../redux/Reducers/userReducer";

class AdminStreamers extends Component {
  componentDidMount() {
    this.props.getAllStreamers();
  }
  render() {
    const streamersMapped =
      this.props.streamers &&
      this.props.streamers.map(streamer => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-id">{streamer.user_id}</li>
            <li className="Admin-box-id">{streamer.app_id}</li>
            <li className="Admin-box-row">{streamer.user_first_name}</li>
            <li className="Admin-box-row">{streamer.user_last_name}</li>
            <li className="Admin-box-row">{streamer.user_email}</li>
          </ul>
        );
      });
    return (
      <div>
        <h2>All streamers</h2>
        <ul className="Admin-table">
          <li className="Admin-table-id">User ID</li>
          <li className="Admin-table-id">App ID</li>
          <li className="Admin-table-column">First name</li>
          <li className="Admin-table-column">Last name</li>
          <li className="Admin-table-column">Email</li>
        </ul>
        {streamersMapped}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    streamers: reduxState.userReducer.streamers
  };
};

export default connect(
  mapStateToProps,
  {
    getAllStreamers
  }
)(AdminStreamers);
