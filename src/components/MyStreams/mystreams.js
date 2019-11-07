import React, { Component } from "react";
import "./mystreams.css";
import { connect } from "react-redux";
import PurchasedStreams from "./PurchasedStreams";
import ApprovedStreams from "./ApprovedStreams";
import PendingStreams from "./PendingStreams";

export default class mystreams extends Component {
  state = {
    currentTab: ""
  };
  render() {
    return (
      <>
        <div className="Mystreams-background">
          <div className="Mystreams-header">
            <button onClick={() => this.setState({ currentTab: "purchased" })}>
              Purchased Streams
            </button>
            <button onClick={() => this.setState({ currentTab: "approved" })}>
              Approved Streams
            </button>
            <button onClick={() => this.setState({ currentTab: "created" })}>
              Created (not yet approved) Streams
            </button>
          </div>
          <div className="Mystreams-container">
            {this.state.currentTab === "purchased" ? (
              <PurchasedStreams />
            ) : this.state.currentTab === "approved" ? (
              <ApprovedStreams />
            ) : this.state.currentTab === "created" ? (
              <PendingStreams />
            ) : (
              <ApprovedStreams />
            )}
          </div>
        </div>
      </>
    );
  }
}
