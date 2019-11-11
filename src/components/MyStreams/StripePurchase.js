import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import "./mystreams.css";

export default class StripePurchase extends Component {
  render() {
    return (
      <div className="Mystreams-background">
        <div className="Mystreams-header">
          <h1> stripe purchase screen</h1>
        </div>
      </div>
    );
  }
}
