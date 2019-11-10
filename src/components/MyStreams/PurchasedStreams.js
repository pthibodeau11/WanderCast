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
            <button
              className="Mystreams-box-id"
              onClick={() => this.watchStream(purchase.stream_live_link)}
            >
              Watch Stream
            </button>
            <button className="Mystreams-box-id">View Details</button>
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
        <ul className="Mystreams-table">
          <li className="Mystreams-table-column">Title</li>
          <li className="Mystreams-table-id">Date</li>
          <li className="Mystreams-table-id">Time</li>
          <li className="Mystreams-table-title">Countdown</li>
          <li className="Mystreams-table-id">Hrs</li>
          <li className="Mystreams-table-title">City</li>
          <li className="Mystreams-table-id">Cost</li>
          <li className="Mystreams-table-id">Watch</li>
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
