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

  handleDelete = e => {
    this.setState({ streamId: e });
    console.log(this.state.streamId);
    this.props.deleteStream(this.state.streamId);
  };
  render() {
    const pendingMapped =
      this.props.pending &&
      this.props.pending.map(pending => {
        return (
          <ul className="Mystreams-box">
            <li className="Mystreams-box-row">{pending.stream_title}</li>
            <li className="Mystreams-box-row">
              <Moment format="LLLL">{pending.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-row">
              <Moment fromNow>{pending.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-row">{pending.stream_hours}</li>
            <li className="Mystreams-box-row">{pending.stream_city}</li>
            <li className="Mystreams-box-row">{pending.stream_price}</li>
            <button>Edit</button>
            <button onClick={() => this.handleDelete(pending.stream_id)}>
              Delete
            </button>
          </ul>
        );
      });
    return (
      <div className="Mystreams-mappedlist">
        <h2>My created (pending approval) stream requests</h2>
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
