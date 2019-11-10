import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import { getApprovedStreams } from "../../redux/Reducers/streamReducer";
import Moment from "react-moment";

class ApprovedStreams extends Component {
  componentDidMount() {
    this.props.getApprovedStreams();
  }

  render() {
    const approvedMapped =
      this.props.approved &&
      this.props.approved.map(approved => {
        return (
          <ul className="Mystreams-box">
            <li className="Mystreams-box-row">{approved.stream_title}</li>
            <li className="Mystreams-box-row">
              <Moment format="L">{approved.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-row">
              <Moment format="LT">{approved.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-row">
              <Moment fromNow>{approved.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-row">{approved.stream_hours}</li>
            <li className="Mystreams-box-row">{approved.stream_city}</li>
            <li className="Mystreams-box-row">{approved.stream_price}</li>
            <button className="Mystreams-box-id">View Details</button>
            <button className="Mystreams-box-id">Purchase ticket</button>
          </ul>
        );
      });
    return (
      <div className="Mystreams-mappedlist">
        <h2>My Approved Streams</h2>
        <ul className="Mystreams-table">
          <li className="Mystreams-table-column">Title</li>
          <li className="Mystreams-table-id">Date</li>
          <li className="Mystreams-table-id">Time</li>
          <li className="Mystreams-table-title">Countdown</li>
          <li className="Mystreams-table-id">Hrs</li>
          <li className="Mystreams-table-title">City</li>
          <li className="Mystreams-table-id">Cost</li>
          <li className="Mystreams-table-id"></li>
          <li className="Mystreams-table-id"></li>
        </ul>
        {approvedMapped}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    approved: reduxState.streamReducer.approved
  };
};

export default connect(
  mapStateToProps,
  {
    getApprovedStreams
  }
)(ApprovedStreams);
