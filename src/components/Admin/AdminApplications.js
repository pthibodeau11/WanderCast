import React, { Component } from "react";
import { connect } from "react-redux";
import "./admin.css";
import { getAllApps } from "../../redux/Reducers/appReducer";

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
            <li className="Admin-box-row">
              {JSON.stringify(application.isstreamer)}
            </li>
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
          <li className="Admin-table-column">Streamer?</li>
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
