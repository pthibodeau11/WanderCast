import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import PurchasedStreams from "./PurchasedStreams";
import ApprovedStreams from "./ApprovedStreams";
import PendingStreams from "./PendingStreams";
import LiveStream from "./LiveStream";

export default class mystreams extends Component {
  state = {
    currentTab: ""
  };
  render() {
    return (
      <>
        <div className="Mystreams-background">
          <div className="Mystreams-header">
            {/* <button onClick={() => this.setState({ currentTab: "live" })}>
              Watch live
            </button> */}
            <button onClick={() => this.setState({ currentTab: "purchased" })}>
              Purchased
            </button>
            <button onClick={() => this.setState({ currentTab: "approved" })}>
              Approved
            </button>
            <button onClick={() => this.setState({ currentTab: "created" })}>
              Pending
            </button>
          </div>
          <div className="Mystreams-container">
            {// this.state.currentTab === "live" ? (
            //   <LiveStream />
            // ) :
            this.state.currentTab === "purchased" ? (
              <PurchasedStreams />
            ) : this.state.currentTab === "approved" ? (
              <ApprovedStreams />
            ) : this.state.currentTab === "created" ? (
              <PendingStreams />
            ) : (
              <PurchasedStreams />
            )}
          </div>
        </div>
      </>
    );
  }
}
