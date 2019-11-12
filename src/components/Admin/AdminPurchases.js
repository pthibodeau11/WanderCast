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
            <li className="Admin-box-id">
              <Moment format="L">{purchase.purchase_timestamp}</Moment>
            </li>
            <li className="Admin-box-id">
              <Moment format="LT">{purchase.purchase_timestamp}</Moment>
            </li>
            <li className="Admin-box-id">{purchase.purchase_price}</li>
            <button className="Admin-box-id">View</button>
          </ul>
        );
      });
    return (
      <div className="Admin-mappedlist">
        <h2>Purchased streams</h2>
        <ul className="Admin-table">
          <li className="Admin-table-id">User ID</li>
          <li className="Admin-table-id">Purchase ID</li>
          <li className="Admin-table-id">Purch Date</li>
          <li className="Admin-table-id">Purch time</li>
          <li className="Admin-table-id">Purch price</li>
          <li className="Admin-table-id"></li>
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
