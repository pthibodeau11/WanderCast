import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import {
  getPendingStreams,
  deleteStream
} from "../../redux/Reducers/streamReducer";
import Moment from "react-moment";

class PendingStreams extends Component {
  componentDidMount() {
    this.props.getPendingStreams();
  }

  handleDelete = () => {
    console.log(this.props.pending[0].stream_id);
    this.props.deleteStream(this.props.pending[0].stream_id);
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
            <button onClick={this.handleDelete}>Delete</button>
          </ul>
        );
      });
    return (
      <div>
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
