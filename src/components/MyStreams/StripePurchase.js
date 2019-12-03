import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import "./mystreams.css";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import axios from "axios";
import { createPurchase } from "../../redux/Reducers/purchReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class StripePurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  handleToken = async (token, addresses) => {
    const {
      streamPrice,
      streamTitle,
      streamId,
      streamerId,
      purchaseTimestamp
    } = this.props;
    axios({
      method: "POST",
      url: process.env.REACT_APP_CHECKOUT,
      data: {
        token: token,
        streamPrice: streamPrice,
        streamTitle: streamTitle
      }
    }).then(response => {
      if (response.data.status === "success") {
        toast.success("Success! Check emails for details", {
          type: "success",
          position: "bottom-left",
          autoClose: 25000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        this.props.createPurchase({
          stream_id: streamId,
          streamer_id: streamerId,
          purchase_price: streamPrice,
          purchase_timestamp: purchaseTimestamp
        });
        axios({
          method: "POST",
          url: process.env.REACT_APP_PURCHASE,
          data: {
            name: token.card.name,
            email: token.email,
            price: streamPrice,
            title: streamTitle
          }
        }).then(response => {
          if (response.data.msg === "success") {
            alert("Message Sent.");
            this.setState({ redirect: true });
          } else if (response.data.msg === "fail") {
            alert("Message failed to send.");
          }
        });
      } else if (response.data.status === "failure") {
        toast.error("Something went wrong", {
          type: "success",
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  };
  render() {
    if (this.state.redirect === true) return <Redirect to="/mystreams" />;
    const { streamId, streamPrice, streamTitle } = this.props;
    return (
      <div className="Mystreams-background">
        <h1> stripe purchase screen</h1>
        <h1>{streamPrice}</h1>
        <StripeCheckout
          stripeKey="pk_test_08ua7Y68IWPQrejTa7vYW0sn00bqlL3A3A"
          token={this.handleToken}
          billingAddress
          shippingAddress
          amount={streamPrice * 100}
          name={streamTitle}
        />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    purchase: reduxState.purchReducer.purchase
  };
};

export default connect(mapStateToProps, {
  createPurchase
})(StripePurchase);
