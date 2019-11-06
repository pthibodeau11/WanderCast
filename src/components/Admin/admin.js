import React, { Component } from "react";
import "./admin.css";
import { connect } from "react-redux";
import { getAllApps } from "../../redux/Reducers/appReducer";
import { getAllStreams } from "../../redux/Reducers/streamReducer";
import { getAllUsers } from "../../redux/Reducers/userReducer";
import { getAllStreamers } from "../../redux/Reducers/userReducer";
import { getAllPurchases } from "../../redux/Reducers/purchReducer";

class admin extends Component {
  componentDidMount() {
    this.props.getAllApps();
    this.props.getAllStreams();
    this.props.getAllUsers();
    this.props.getAllStreamers();
    this.props.getAllPurchases();
  }
  render() {
    const usersMapped =
      this.props.users &&
      this.props.users.map(user => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-row">{user.user_id}</li>
            <li className="Admin-box-row">{user.user_first_name}</li>
            <li className="Admin-box-row">{user.user_last_name}</li>
            <li className="Admin-box-row">{user.user_email}</li>
          </ul>
        );
      });
    const streamersMapped =
      this.props.streamers &&
      this.props.streamers.map(streamer => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-row">{streamer.user_id}</li>
            <li className="Admin-box-row">{streamer.user_first_name}</li>
            <li className="Admin-box-row">{streamer.user_last_name}</li>
            <li className="Admin-box-row">{streamer.user_email}</li>
          </ul>
        );
      });
    const streamsMapped =
      this.props.streams &&
      this.props.streams.map(stream => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-row">{stream.stream_id}</li>
            <li className="Admin-box-row">{stream.stream_title}</li>
            <li className="Admin-box-row">{stream.stream_date}</li>
            <li className="Admin-box-row">{stream.stream_city}</li>
          </ul>
        );
      });
    const purchasesMapped =
      this.props.purchases &&
      this.props.purchases.map(purchase => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-row">{purchase.purchase_id}</li>
            <li className="Admin-box-row">{purchase.purchase_timestamp}</li>
            <li className="Admin-box-row">{purchase.user_id}</li>
          </ul>
        );
      });
    const applicationsMapped =
      this.props.applications &&
      this.props.applications.map(application => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-row">{application.app_id}</li>
            <li className="Admin-box-row">{application.user_id}</li>
            <li className="Admin-box-row">{application.user_experience}</li>
          </ul>
        );
      });
    return (
      <>
        <div className="Admin-background">
          <div className="Admin-header">
            <h2>Users</h2>
            <h2>Streamers</h2>
            <h2>Streams</h2>
            <h2>New Streamer Applications</h2>
            <h2>Purchases</h2>
          </div>
          <div className="Admin-container">
            <h2>Users</h2>
            {usersMapped}
            <h2>Streamers</h2>
            {streamersMapped}
            <h2>Streams</h2>
            {streamsMapped}
            <h2>New Streamer Applications</h2>
            {applicationsMapped}
            <h2>Purchases</h2>
            {purchasesMapped}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    applications: reduxState.appReducer.applications,
    streams: reduxState.streamReducer.streams,
    purchases: reduxState.purchReducer.purchases,
    users: reduxState.userReducer.users,
    streamers: reduxState.userReducer.streamers
  };
};

export default connect(
  mapStateToProps,
  {
    getAllApps,
    getAllStreams,
    getAllUsers,
    getAllStreamers,
    getAllPurchases
  }
)(admin);
