import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import { getPendingStreams } from "../../redux/Reducers/streamReducer";

class PendingStreams extends Component {
  componentDidMount() {
    this.props.getPendingStreams();
  }
  render() {
    const pendingMapped =
      this.props.pending &&
      this.props.pending.map(pending => {
        return (
          <ul className="Mystreams-box">
            <li className="Mystreams-box-row">{pending.stream_title}</li>
            <li className="Mystreams-box-row">{pending.stream_date}</li>
            <li className="Mystreams-box-row">{pending.stream_hours}</li>
            <li className="Mystreams-box-row">{pending.stream_city}</li>
            <li className="Mystreams-box-row">{pending.stream_price}</li>
            <button>Edit</button>
            <button>Cancel</button>
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
    getPendingStreams
  }
)(PendingStreams);
