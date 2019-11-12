import React, { Component } from "react";
import "./admin.css";
import AdminApplications from "./AdminApplications";
import AdminPurchases from "./AdminPurchases";
import AdminStreamers from "./AdminStreamers";
import AdminStreams from "./AdminStreams";
import AdminUsers from "./AdminUsers";

export default class admin extends Component {
  state = {
    currentTab: ""
  };

  render() {
    return (
      <>
        <div className="Admin-background">
          <div className="Admin-header">
            <button onClick={() => this.setState({ currentTab: "users" })}>
              Users
            </button>
            <button onClick={() => this.setState({ currentTab: "streamers" })}>
              Streamers
            </button>
            <button onClick={() => this.setState({ currentTab: "streams" })}>
              Streams
            </button>
            <button
              onClick={() => this.setState({ currentTab: "applications" })}
            >
              Applications
            </button>
            <button onClick={() => this.setState({ currentTab: "purchases" })}>
              Sales
            </button>
          </div>
          <div className="Admin-container">
            {this.state.currentTab === "users" ? (
              <AdminUsers />
            ) : this.state.currentTab === "streamers" ? (
              <AdminStreamers />
            ) : this.state.currentTab === "streams" ? (
              <AdminStreams />
            ) : this.state.currentTab === "applications" ? (
              <AdminApplications />
            ) : this.state.currentTab === "purchases" ? (
              <AdminPurchases />
            ) : (
              <AdminUsers />
            )}
          </div>
        </div>
      </>
    );
  }
}
