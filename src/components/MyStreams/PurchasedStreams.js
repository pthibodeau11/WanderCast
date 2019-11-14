import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import { getUserPurchases } from "../../redux/Reducers/purchReducer";
import LiveStream from "./LiveStream";
import Iframe from "react-iframe";
import Moment from "react-moment";
import PurchasePopup from "./PurchasePopup";

class PurchasedStreams extends Component {
  constructor() {
    super();
    this.state = {
      videoLink: "",
      showPopup: false,
      streamId: "",
      streamTitle: "",
      streamDesc: "",
      streamTime: "",
      streamHours: "",
      streamerId: "",
      purchaseId: "",
      purchaseTime: "",
      purchasePrice: ""
    };
  }

  componentDidMount() {
    this.props.getUserPurchases();
  }

  togglePopup = e => {
    console.log(e);
    console.log(e.stream_id);
    this.setState({
      showPopup: !this.state.showPopup,
      streamId: e.stream_id,
      streamTitle: e.stream_title,
      streamDesc: e.stream_desc,
      streamTime: e.stream_time,
      streamHours: e.stream_hours,
      streamerId: e.streamer_id,
      purchaseId: e.purchase_id,
      purchaseTime: e.purchase_timestamp,
      purchasePrice: e.purchase_price
    });
  };

  watchStream = e => {
    console.log(e);
    this.setState({ videoLink: e });
  };

  render() {
    console.log(this.state.videoLink);
    const purchasesMapped =
      this.props.purchases &&
      this.props.purchases.map(purchase => {
        return (
          <ul className="Mystreams-box">
            <li className="Mystreams-box-row">{purchase.stream_title}</li>
            <li className="Mystreams-box-id">
              <Moment format="L">{purchase.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-id">
              <Moment format="LT">{purchase.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-title">
              <Moment fromNow>{purchase.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-id">{purchase.stream_hours}</li>
            <li className="Mystreams-box-title">{purchase.stream_city}</li>

            <li className="Mystreams-box-id">{purchase.stream_price}</li>
            <span
              className="popup-edit-button"
              onClick={() => this.togglePopup(purchase)}
            >
              Receipt
            </span>
            {this.state.showPopup ? (
              <PurchasePopup
                closePopup={this.togglePopup.bind(this)}
                streamId={this.state.streamId}
                streamTitle={this.state.streamTitle}
                streamDesc={this.state.streamDesc}
                streamTime={this.state.streamTime}
                streamHours={this.state.streamHours}
                streamerId={this.state.streamerId}
                purchaseId={this.state.purchaseId}
                purchaseTime={this.state.purchaseTime}
                purchasePrice={this.state.purchasePrice}
              />
            ) : null}
            <span
              className="popup-edit-button"
              onClick={() => this.watchStream(purchase.stream_live_link)}
            >
              Watch
            </span>
          </ul>
        );
      });
    return (
      <div className="Mystreams-mappedlist">
        <h2>My Purchased Streams</h2>
        <div className="Mystreams-video">
          <Iframe
            className="Stream-box"
            url={`https://video.ibm.com/combined-embed/${this.state.videoLink}?videos=0`}
            styles={{ border: "1px black" }}
            webkitallowfullscreen
            allowfullscreen
            frameborder="no"
            width="952"
            height="356"
          ></Iframe>
        </div>
        <br />
        <br />
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
        {purchasesMapped}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    purchases: reduxState.purchReducer.purchases
  };
};

export default connect(
  mapStateToProps,
  {
    getUserPurchases
  }
)(PurchasedStreams);
