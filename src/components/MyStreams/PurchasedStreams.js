import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import { getUserPurchases } from "../../redux/Reducers/purchReducer";

class PurchasedStreams extends Component {
  componentDidMount() {
    this.props.getUserPurchases();
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
    return (
      <div>
        <h2>My purchased streams</h2>
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
