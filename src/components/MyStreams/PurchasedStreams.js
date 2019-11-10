import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import { getUserPurchases } from "../../redux/Reducers/purchReducer";
import LiveStream from "./LiveStream";
import Iframe from "react-iframe";
import Moment from "react-moment";

class PurchasedStreams extends Component {
  constructor() {
    super();
    this.state = {
      videoLink: ""
    };
  }

  componentDidMount() {
    this.props.getUserPurchases();
  }

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
            <li className="Mystreams-box-title">
              <Moment format="LLLL">{purchase.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-title">
              <Moment fromNow>{purchase.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-id">{purchase.stream_hours}</li>
            <li className="Mystreams-box-title">{purchase.stream_city}</li>
            <button
              className="Mystreams-box-title"
              onClick={() => this.watchStream(purchase.stream_live_link)}
            >
              Watch Stream
            </button>
            <li className="Mystreams-box-row">{purchase.stream_video_link}</li>
            <li className="Mystreams-box-row">
              <Moment format="LLLL">{purchase.purchase_timestamp}</Moment>
            </li>
            <li className="Mystreams-box-title">{purchase.stream_price}</li>
          </ul>
        );
      });
    return (
      <div className="Mystreams-mappedlist">
        <h2>My purchased streams</h2>
        <div>
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
        <ul className="Mystreams-table">
          <li className="Mystreams-table-column">Title</li>
          <li className="Mystreams-table-title">Stream time</li>
          <li className="Mystreams-table-title">Countdown</li>
          <li className="Mystreams-table-id">Hrs</li>
          <li className="Mystreams-table-title">Stream City</li>
          <li className="Mystreams-table-title">Watch</li>
          <li className="Mystreams-table-column">Video link</li>
          <li className="Mystreams-table-column">Purchase date/time</li>
          <li className="Mystreams-table-title">Purchase price</li>
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
