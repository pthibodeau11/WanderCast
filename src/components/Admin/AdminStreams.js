import React, { Component } from "react";
import { connect } from "react-redux";
import "./admin.css";
import {
  getAllStreams,
  getPendingStreams
} from "../../redux/Reducers/streamReducer";
import StreamsPopup from "./StreamsPopup";
import Moment from "react-moment";

class AdminStreams extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      streamId: "",
      streamTitle: ""
    };
  }
  componentDidMount() {
    this.props.getAllStreams();
    console.log(this.props);
  }

  togglePopup = e => {
    console.log(e);
    // console.log(e.stream_id);
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  handleSelect = e => {
    this.setState({
      streamId: e.stream_id,
      streamTitle: e.stream_title
    });
  };

  render() {
    console.log(this.props.streams);
    console.log(this.props.streams.pending);
    console.log(this.props.pending);
    const streamsMapped = this.props.streams.map(stream => {
      return (
        <ul className="Admin-box">
          <li className="Admin-box-id">{stream.stream_id}</li>
          <li className="Admin-box-title">{stream.stream_title}</li>
          <li className="Admin-box-id">
            <Moment format="L">{stream.stream_time}</Moment>
          </li>
          <li className="Admin-box-id">
            <Moment format="LT">{stream.stream_time}</Moment>
          </li>
          <li className="Admin-box-title">{stream.stream_city}</li>
          <li className="Admin-box-id">{JSON.stringify(stream.isapproved)}</li>
          <li className="Admin-box-id">{stream.purchase_id}</li>
          <span
            className="popup-edit-button"
            onClick={() => {
              this.handleSelect(stream);
              this.togglePopup();
            }}
          >
            Review
          </span>
          {this.state.showPopup ? (
            <StreamsPopup
              closePopup={this.togglePopup.bind(this)}
              streamId={this.state.streamId}
              streamTitle={this.state.streamTitle}
            />
          ) : null}
        </ul>
      );
    });
    return (
      <div className="Admin-mappedlist">
        <h2>All streams</h2>
        <ul className="Admin-table">
          <li className="Admin-table-id">Stream ID</li>
          <li className="Admin-table-title">Title</li>
          <li className="Admin-table-id">Date</li>
          <li className="Admin-table-id">Time</li>
          <li className="Admin-table-title">City</li>
          <li className="Admin-table-id">Approved?</li>
          <li className="Admin-table-id">Purchase ID</li>
          <li className="Admin-table-id"></li>
        </ul>
        {streamsMapped}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    streams: reduxState.streamReducer.streams,
    pending: reduxState.streamReducer.pending
  };
};

export default connect(mapStateToProps, {
  getAllStreams,
  getPendingStreams
})(AdminStreams);
