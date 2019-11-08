import React, { Component } from "react";
import { connect } from "react-redux";
import "./admin.css";
import { getAllStreams } from "../../redux/Reducers/streamReducer";

class AdminStreams extends Component {
  componentDidMount() {
    this.props.getAllStreams();
  }
  render() {
    const streamsMapped =
      this.props.streams &&
      this.props.streams.map(stream => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-id">{stream.stream_id}</li>
            <li className="Admin-box-title">{stream.stream_title}</li>
            <li className="Admin-box-row">{stream.stream_date}</li>
            <li className="Admin-box-row">{stream.stream_city}</li>
            <li className="Admin-box-row">
              {JSON.stringify(stream.isapproved)}
            </li>
            <li className="Admin-box-row">{stream.purchase_id}</li>
          </ul>
        );
      });
    return (
      <div>
        <h2>All streams</h2>
        <ul className="Admin-table">
          <li className="Admin-table-id">Stream ID</li>
          <li className="Admin-table-title">Stream Title</li>
          <li className="Admin-table-column">Stream Date</li>
          <li className="Admin-table-column">Stream City</li>
          <li className="Admin-table-column">Approved?</li>
          <li className="Admin-table-column">Purchase ID</li>
        </ul>
        {streamsMapped}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    streams: reduxState.streamReducer.streams
  };
};

export default connect(
  mapStateToProps,
  {
    getAllStreams
  }
)(AdminStreams);