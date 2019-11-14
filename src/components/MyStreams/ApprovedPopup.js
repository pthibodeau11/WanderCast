import React, { Component } from "react";
import "./Popup.css";
import { connect } from "react-redux";

export default class ApprovedPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
            <label>Purchase Price:</label>
            <li>{this.props.purchasePrice}</li>
            <br />
          </div>
          <div>
            <h1 className="popup-header">Ready for purchase!</h1>
          </div>
          <div className="popup-body">
            <label>Stream ID:</label>
            <li>{this.props.streamId}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>Stream Title:</label>
            <li>{this.props.streamTitle}</li>
            <br />
          </div>
          <div className="popup-desc">
            <label>Stream Desc:</label>
            <text>{this.props.streamDesc}</text>
            <br />
          </div>
          <div className="popup-body">
            <label>Stream Date/Time:</label>
            <li>{this.props.streamTime}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>Stream Length:</label>
            <li>{this.props.streamHours}hrs</li>
            <br />
          </div>
          <div className="popup-body">
            <label>Streamer ID:</label>
            <li>{this.props.streamerId}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>Streamer Equip:</label>
            <li>{this.props.streamerEquip}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>Country:</label>
            <li>{this.props.streamCountry}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>Street:</label>
            <li>{this.props.streamStreet}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>City:</label>
            <li>{this.props.streamCity}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>State:</label>
            <li>{this.props.streamState}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>Zip:</label>
            <li>{this.props.streamZip}</li>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
