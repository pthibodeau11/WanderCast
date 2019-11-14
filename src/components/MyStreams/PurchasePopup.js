import React, { Component } from "react";
import "./Popup.css";
import { connect } from "react-redux";
import { getUserPurchase } from "../../redux/Reducers/purchReducer";

class PurchasePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //   componentDidMount() {
  //     this.props.getUserPurchase(this.props.streamId);
  //     console.log(this.props);
  //   }
  render() {
    // const purchases = this.props && this.props;
    // console.log(this.props.getUserPurchase(this.props.streamId));
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
          <div>
            <h1 className="popup-header">Purchase Receipt</h1>
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
            <label>Purchase ID:</label>
            <li>{this.props.purchaseId}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>Purchase Date/Time:</label>
            <li>{this.props.purchaseTime}</li>
            <br />
          </div>
          <div className="popup-body">
            <label>Purchase Price:</label>
            <li>{this.props.purchasePrice}</li>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    purchase: reduxState.purchReducer.purchase
  };
};

export default connect(
  mapStateToProps,
  {
    getUserPurchase
  }
)(PurchasePopup);
