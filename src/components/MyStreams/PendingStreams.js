import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import {
  getPendingStreams,
  deleteStream
} from "../../redux/Reducers/streamReducer";
import Moment from "react-moment";
import PendingPopup from "./PendingPopup";

class PendingStreams extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      streamId: "",
      purchasing: "",
      streamCategory: "",
      streamTitle: "",
      streamDesc: "",
      streamTime: "",
      streamHours: "",
      streamCountry: "",
      streamStreet: "",
      streamCity: "",
      streamState: "",
      streamZip: ""
    };
  }
  componentDidMount() {
    this.props.getPendingStreams();
    // console.log(this.props.pending[0].stream_id);
  }

  handleDelete = async e => {
    await this.setState({ streamId: e });
    console.log(this.state.streamId);
    await this.props.deleteStream(this.state.streamId);
    this.props.getPendingStreams();
  };

  togglePopup = e => {
    console.log(e);
    // console.log(e.stream_id);
    this.setState({
      showPopup: !this.state.showPopup,
      streamId: e.stream_id,
      streamCategory: e.stream_category,
      streamTitle: e.stream_title,
      streamDesc: e.stream_desc,
      streamTime: e.stream_time,
      streamHours: e.stream_hours,
      streamCountry: e.stream_country,
      streamStreet: e.stream_street,
      streamCity: e.stream_city,
      streamState: e.stream_state,
      streamZip: e.stream_zip
    });
  };
  render() {
    const pendingMapped =
      this.props.pending &&
      this.props.pending.map(pending => {
        return (
          <ul className="Mystreams-box">
            <li className="Mystreams-box-row">{pending.stream_title}</li>
            <li className="Mystreams-box-id">
              <Moment format="L">{pending.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-id">
              <Moment format="LT">{pending.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-title">
              <Moment fromNow>{pending.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-id">{pending.stream_hours}</li>
            <span
              className="popup-edit-button"
              onClick={() => this.togglePopup(pending)}
            >
              Review
            </span>
            {this.state.showPopup ? (
              <PendingPopup
                closePopup={this.togglePopup.bind(this)}
                streamId={this.state.streamId}
                streamCategory={this.state.streamCategory}
                streamTitle={this.state.streamTitle}
                streamDesc={this.state.streamDesc}
                streamTime={this.state.streamTime}
                streamHours={this.state.streamHours}
                streamCountry={this.state.streamCountry}
                streamStreet={this.state.streamStreet}
                streamCity={this.state.streamCity}
                streamState={this.state.streamState}
                streamZip={this.state.streamZip}
              />
            ) : null}
            <span
              className="popup-edit-button"
              onClick={() => this.handleDelete(pending.stream_id)}
            >
              Delete
            </span>
          </ul>
        );
      });
    return (
      <div className="Mystreams-mappedlist">
        <h2>My Pending Streams</h2>
        <ul className="Mystreams-table">
          <li className="Mystreams-table-column">Title</li>
          <li className="Mystreams-table-id">Date</li>
          <li className="Mystreams-table-id">Time</li>
          <li className="Mystreams-table-title">Countdown</li>
          <li className="Mystreams-table-id">Hrs</li>
          <li className="Mystreams-table-id"></li>
          <li className="Mystreams-table-id"></li>
        </ul>
        {pendingMapped}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    pending: reduxState.streamReducer.pending
  };
};

export default connect(
  mapStateToProps,
  {
    getPendingStreams,
    deleteStream
  }
)(PendingStreams);
