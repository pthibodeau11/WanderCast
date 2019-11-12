import React, { Component } from "react";
import { connect } from "react-redux";
import "./admin.css";
import { getAllApps } from "../../redux/Reducers/appReducer";
import Moment from "react-moment";

class AdminApplications extends Component {
  componentDidMount() {
    this.props.getAllApps();
  }
  render() {
    const applicationsMapped =
      this.props.applications &&
      this.props.applications.map(application => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-id">{application.app_id}</li>
            <li className="Admin-box-id">{application.user_id}</li>
            <li className="Admin-box-row">{application.user_experience}</li>
            <li className="Admin-box-id">
              <Moment format="L">{application.app_timestamp}</Moment>
            </li>
            <li className="Admin-box-id">
              <Moment format="LT">{application.app_timestamp}</Moment>
            </li>
            <li className="Admin-box-id">
              {JSON.stringify(application.isstreamer)}
            </li>
            <button className="Admin-box-id">Review</button>
          </ul>
        );
      });
    return (
      <div>
        <h2>Applications</h2>
        <ul className="Admin-table">
          <li className="Admin-table-id">App ID</li>
          <li className="Admin-table-id">User ID</li>
          <li className="Admin-table-column">User Experience</li>
          <li className="Admin-table-id">App date</li>
          <li className="Admin-table-id">App time</li>
          <li className="Admin-table-id">Streamer?</li>
          <li className="Admin-table-id"></li>
        </ul>
        {applicationsMapped}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    applications: reduxState.appReducer.applications
  };
};

export default connect(
  mapStateToProps,
  {
    getAllApps
  }
)(AdminApplications);
