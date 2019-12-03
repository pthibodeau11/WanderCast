import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import { getApprovedStreams } from "../../redux/Reducers/streamReducer";
import Moment from "react-moment";
import StripePurchase from "./StripePurchase";
import ApprovedPopup from "./ApprovedPopup";

class ApprovedStreams extends Component {
  state = {
    showPopup: false,
    selectedStream: "",
    purchasing: "",
    streamId: "",
    streamTitle: "",
    streamDesc: "",
    streamTime: "",
    streamHours: "",
    streamerId: "",
    streamEquip: "",
    streamCountry: "",
    streamStreet: "",
    streamCity: "",
    streamState: "",
    streamZip: "",
    streamPrice: ""
  };

  handlePurchase = e => {
    this.setState({
      selectedStream: e.stream_id,
      streamPrice: e.stream_price,
      streamTitle: e.stream_title,
      streamerId: e.streamer_id
    });
    this.setState({ purchasing: "purchasing" });
  };
  togglePopup = e => {
    this.setState({
      showPopup: !this.state.showPopup,
      streamId: e.stream_id,
      streamTitle: e.stream_title,
      streamDesc: e.stream_desc,
      streamTime: e.stream_time,
      streamHours: e.stream_hours,
      streamerId: e.streamer_id,
      streamEquip: e.stream_equipment,
      streamCountry: e.stream_country,
      streamStreet: e.stream_street,
      streamCity: e.stream_city,
      streamState: e.stream_state,
      streamZip: e.stream_zip,
      streamPrice: e.stream_price
    });
  };

  // handleCancel = () => {
  //   this.setState({ purchasing: "default" });
  // };

  componentDidMount() {
    this.props.getApprovedStreams();
  }

  render() {
    const approvedMapped =
      this.props.approved &&
      this.props.approved.map(approved => {
        return (
          <ul className="Mystreams-box">
            <li className="Mystreams-box-row">{approved.stream_title}</li>
            <li className="Mystreams-box-id">
              <Moment format="L">{approved.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-id">
              <Moment format="LT">{approved.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-title">
              <Moment fromNow>{approved.stream_time}</Moment>
            </li>
            <li className="Mystreams-box-id">{approved.stream_hours}</li>
            <li className="Mystreams-box-id">{approved.stream_price}</li>
            <span
              className="popup-edit-review"
              onClick={() => this.togglePopup(approved)}
            >
              Review
            </span>
            {this.state.showPopup ? (
              <ApprovedPopup
                closePopup={this.togglePopup.bind(this)}
                streamId={this.state.streamId}
                streamTitle={this.state.streamTitle}
                streamDesc={this.state.streamDesc}
                streamTime={this.state.streamTime}
                streamHours={this.state.streamHours}
                streamerId={this.state.streamerId}
                streamEquip={this.state.streamEquip}
                streamCountry={this.state.streamCountry}
                streamStreet={this.state.streamStreet}
                streamCity={this.state.streamCity}
                streamState={this.state.streamState}
                streamZip={this.state.streamZip}
                streamPrice={this.state.streamPrice}
              />
            ) : null}
            <span
              className="popup-edit-button"
              onClick={() => this.handlePurchase(approved)}
            >
              Purchase
            </span>
          </ul>
        );
      });
    return (
      <>
        {/* <div className="Mystreams-mappedlist">
          <h2>My Approved Streams</h2>
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
          {approvedMapped}
        </div> */}
        {this.state.purchasing === "default" ? (
          <div className="Mystreams-mappedlist">
            {/* <h2>My Approved Streams</h2> */}
            <ul className="Mystreams-table">
              <li className="Mystreams-table-column">Title</li>
              <li className="Mystreams-table-id">Date</li>
              <li className="Mystreams-table-id">Time</li>
              <li className="Mystreams-table-title">Countdown</li>
              <li className="Mystreams-table-id">Hrs</li>
              <li className="Mystreams-table-id">Cost</li>
              <li className="Mystreams-table-id"></li>
              <li className="Mystreams-table-id"></li>
            </ul>
            {approvedMapped}
          </div>
        ) : this.state.purchasing === "purchasing" ? (
          <StripePurchase
            streamId={this.state.selectedStream}
            streamPrice={this.state.streamPrice}
            streamTitle={this.state.streamTitle}
            streamerId={this.state.streamerId}
          />
        ) : (
          <div className="Mystreams-mappedlist">
            {/* <h2>My Approved Streams</h2> */}
            <ul className="Mystreams-table">
              <li className="Mystreams-table-column">Title</li>
              <li className="Mystreams-table-id">Date</li>
              <li className="Mystreams-table-id">Time</li>
              <li className="Mystreams-table-title">Countdown</li>
              <li className="Mystreams-table-id">Hrs</li>
              <li className="Mystreams-table-id">Cost</li>
              <li className="Mystreams-table-id"></li>
              <li className="Mystreams-table-id"></li>
            </ul>
            {approvedMapped}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    approved: reduxState.streamReducer.approved
  };
};

export default connect(mapStateToProps, {
  getApprovedStreams
})(ApprovedStreams);
