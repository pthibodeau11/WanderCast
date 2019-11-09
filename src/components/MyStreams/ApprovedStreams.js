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
              <Moment format="LLLL">{approved.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-row">
              <Moment fromNow>{approved.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-row">{approved.stream_hours}</li>
            <li className="Mystreams-box-row">{approved.stream_city}</li>
            <li className="Mystreams-box-row">{approved.stream_price}</li>
            <button>Purchase ticket</button>
          </ul>
        );
      });
    return (
      <div>
        <h2>My approved (ready for purchase) stream requests</h2>
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
