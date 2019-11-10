import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import {
  getPendingStreams,
  deleteStream
} from "../../redux/Reducers/streamReducer";
import Moment from "react-moment";

class PendingStreams extends Component {
  constructor() {
    super();
    this.state = {
      streamId: ""
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
            <li className="Mystreams-box-title">{pending.stream_city}</li>
            <li className="Mystreams-box-id">{pending.stream_price}</li>
            <button className="Mystreams-box-id">View/Edit</button>
            <button
              className="Mystreams-box-id"
              onClick={() => this.handleDelete(pending.stream_id)}
            >
              Delete
            </button>
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
          <li className="Mystreams-table-title">City</li>
          <li className="Mystreams-table-id">Cost</li>
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
