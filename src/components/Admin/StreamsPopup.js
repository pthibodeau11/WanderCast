import React, { Component } from "react";
import "./popup.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllStreams,
  adminEditPendingStream
} from "../../redux/Reducers/streamReducer";

class StreamsPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamId: this.props.streamId,
      streamTitle: this.props.streamTitle,
      streamerId: "",
      streamPrice: "",
      streamLiveLink: "",
      streamEquipment: "",
      isapproved: ""
    };
  }
  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  submitEdit = async () => {
    const {
      streamId,
      streamTitle,
      streamerId,
      streamPrice,
      streamLiveLink,
      streamEquipment,
      isapproved
    } = this.state;
    this.props.adminEditPendingStream(streamId, {
      streamTitle: streamTitle,
      streamerId: streamerId,
      streamPrice: streamPrice,
      streamLiveLink: streamLiveLink,
      streamEquipment: streamEquipment,
      isapproved: isapproved
    });
    this.props.getAllStreams();
    // this.toggleEdit("");
  };
  render() {
    return (
      <div>
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-close-button-div">
              <span
                className="popup-close-button"
                onClick={this.props.closePopup}
              >
                X
              </span>
            </div>
            <div className="popup-body">
              <>
                <label>Stream Title:</label>
                <li>{this.state.streamTitle}</li>
              </>
            </div>
            <div className="popup-body">
              <>
                <label>Stream Id:</label>
                <li>{this.state.streamId}</li>
              </>
            </div>
            <div className="popup-body">
              <>
                <label>Streamer Id:</label>
                <input
                  placeholder="enter streamer id"
                  name="streamerId"
                  onChange={this.handleInput}
                ></input>
                <br />
              </>
            </div>
            <div className="popup-body">
              <>
                <label>Stream Price:</label>
                <input
                  placeholder="enter stream price"
                  name="streamPrice"
                  onChange={this.handleInput}
                ></input>
                <br />
              </>
            </div>
            <div className="popup-body">
              <>
                <label>Stream Live Code:</label>
                <input
                  placeholder="enter stream code"
                  name="streamLiveLink"
                  onChange={this.handleInput}
                ></input>
                <br />
              </>
            </div>
            <div className="popup-body">
              <>
                <label>Stream Equipment:</label>
                <input
                  placeholder="enter stream equipment"
                  name="streamEquipment"
                  onChange={this.handleInput}
                ></input>
                <br />
              </>
            </div>
            <div className="popup-body">
              <>
                <label>Is Approved?</label>
                <input
                  placeholder="enter true or false"
                  name="isapproved"
                  onChange={this.handleInput}
                ></input>
                <br />
              </>
            </div>
            <Link to="/admin">
              <span
                className="popup-edit-button"
                onClick={() => {
                  this.submitEdit();
                }}
              >
                submit
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    pending: reduxState.streamReducer.pending,
    streams: reduxState.streamReducer.streams
  };
};

export default connect(mapStateToProps, {
  adminEditPendingStream,
  getAllStreams
})(StreamsPopup);
