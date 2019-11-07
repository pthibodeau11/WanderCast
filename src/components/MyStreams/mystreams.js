import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import { getUserPurchases } from "../../redux/Reducers/purchReducer";
import { getApprovedStreams } from "../../redux/Reducers/streamReducer";
import { getPendingStreams } from "../../redux/Reducers/streamReducer";

class mystreams extends Component {
  componentDidMount() {
    this.props.getUserPurchases();
    this.props.getApprovedStreams();
    this.props.getPendingStreams();
  }

  render() {
    const purchasesMapped =
      this.props.purchases &&
      this.props.purchases.map(purchase => {
        return (
          <ul className="Mystreams-box">
            <li className="Mystreams-box-row">{purchase.stream_title}</li>
            <li className="Mystreams-box-row">{purchase.stream_date}</li>
            <li className="Mystreams-box-row">{purchase.stream_hours}</li>
            <li className="Mystreams-box-row">{purchase.stream_city}</li>
            <li className="Mystreams-box-row">{purchase.stream_live_link}</li>
            <li className="Mystreams-box-row">{purchase.stream_video_link}</li>
            <li className="Mystreams-box-row">{purchase.purchase_timestamp}</li>
            <li className="Mystreams-box-row">{purchase.stream_price}</li>
          </ul>
        );
      });
    const approvedMapped =
      this.props.approved &&
      this.props.approved.map(approved => {
        return (
          <ul className="Mystreams-box">
            <li className="Mystreams-box-row">{approved.stream_title}</li>
            <li className="Mystreams-box-row">{approved.stream_date}</li>
            <li className="Mystreams-box-row">{approved.stream_hours}</li>
            <li className="Mystreams-box-row">{approved.stream_city}</li>
            <li className="Mystreams-box-row">{approved.stream_price}</li>
            <button>Purchase ticket</button>
          </ul>
        );
      });
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
      <>
        <div className="Mystreams-background">
          <div className="Mystreams-header">
            <h2>Purchased Streams</h2>
            <h2>Approved Streams</h2>
            <h2>Created (not yet approved) Streams</h2>
          </div>
          <div className="Mystreams-container">
            <h2>My purchased streams</h2>
            {purchasesMapped}
            <h2>My approved (ready for purchase) stream requests</h2>
            {approvedMapped}
            <h2>My pending (not yet approved) stream requests</h2>
            {pendingMapped}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    purchases: reduxState.purchReducer.purchases,
    approved: reduxState.streamReducer.approved,
    pending: reduxState.streamReducer.pending
  };
};

export default connect(
  mapStateToProps,
  {
    getUserPurchases,
    getApprovedStreams,
    getPendingStreams
  }
)(mystreams);
