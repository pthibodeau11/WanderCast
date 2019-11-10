import React, { Component } from "react";
import { connect } from "react-redux";
import "./admin.css";
import Moment from "react-moment";

import { getAllPurchases } from "../../redux/Reducers/purchReducer";

class AdminPurchases extends Component {
  componentDidMount() {
    this.props.getAllPurchases();
  }
  render() {
    const purchasesMapped =
      this.props.purchases &&
      this.props.purchases.map(purchase => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-id">{purchase.user_id}</li>
            <li className="Admin-box-id">{purchase.purchase_id}</li>
            <li className="Admin-box-row">
              <Moment format="LLLL">{purchase.purchase_timestamp}</Moment>
            </li>
          </ul>
        );
      });
    return (
      <div className="Admin-mappedlist">
        <h2>Purchased streams</h2>
        <ul className="Admin-table">
          <li className="Admin-table-id">User ID</li>
          <li className="Admin-table-id">Purchase ID</li>
          <li className="Admin-table-column">Purchase date/time</li>
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
    getAllPurchases
  }
)(AdminPurchases);
