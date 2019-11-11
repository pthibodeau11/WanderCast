import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import "./mystreams.css";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import axios from "axios";
import { createPurchase } from "../../redux/Reducers/purchReducer";
import { connect } from "react-redux";

toast.configure();

class StripePurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleToken = async (token, addresses) => {
    console.log(this.props);
    console.log(token);
    const { streamPrice, streamTitle, streamId, streamerId } = this.props;
    axios({
      method: "POST",
      url: "http://localhost:7777/checkout",
      data: {
        token: token,
        streamPrice: streamPrice,
        streamTitle: streamTitle
      }
    }).then(response => {
      if (response.data.status === "success") {
        toast("Success! Check emails for details", { type: "success" });
        this.props.createPurchase({
          stream_id: streamId,
          streamer_id: streamerId
        });
        axios({
          method: "POST",
          url: "http://localhost:7777/send/purchase",
          data: {
            name: token.card.name,
            email: token.email,
            price: streamPrice,
            title: streamTitle
          }
        }).then(response => {
          if (response.data.msg === "success") {
            alert("Message Sent.");
          } else if (response.data.msg === "fail") {
            alert("Message failed to send.");
          }
        });
      } else if (response.data.status === "failure") {
        toast("Something went wrong", { type: "success" });
      }
      console.log(response);
    });
  };
  render() {
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

export default connect(
  mapStateToProps,
  {
    createPurchase
  }
)(StripePurchase);
