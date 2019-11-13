import React, { Component } from "react";
import "./Popup.css";
// import { connect } from "react-redux";

export default class PendingPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
            <div>
              <h1 className="popup-header">Review / Edit</h1>
            </div>
            <div className="popup-body">
              <label>Stream Category:</label>
              <li>{this.props.streamCategory}</li>
            </div>
            <div className="popup-body">
              <label>Stream Title:</label>
              <li>{this.props.streamTitle}</li>
            </div>
            <div className="popup-desc">
              <label>Stream Desc:</label>
              <li>{this.props.streamDesc}</li>
            </div>
            <div className="popup-body">
              <label>Stream Date/Time:</label>
              <li>{this.props.streamTime}</li>
            </div>
            <div className="popup-body">
              <label>Stream Length:</label>
              <li>{this.props.streamHours}hrs</li>
            </div>
            <div className="popup-body">
              <label>Country:</label>
              <li>{this.props.streamCountry}</li>
            </div>
            <div className="popup-body">
              <label>Street:</label>
              <li>{this.props.streamStreet}</li>
            </div>
            <div className="popup-body">
              <label>City:</label>
              <li>{this.props.streamCity}</li>
            </div>
            <div className="popup-body">
              <label>State:</label>
              <li>{this.props.streamState}</li>
            </div>
            <div className="popup-body">
              <label>Zip:</label>
              <li>{this.props.streamZip}</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = reduxState => {
//     return {
//       pending: reduxState.streamReducer.pending
//     };
//   };

//   export default connect(
//     mapStateToProps,
//     {
//       editPendingStream
//     }
//   )(PendingPopup);
