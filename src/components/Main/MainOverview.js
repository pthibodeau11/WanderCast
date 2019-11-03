import React, { Component } from "react";
import "./MainOverview.css";

export default class MainOverview extends Component {
  render() {
    return (
      <div className="Main-overview">
        <section className="Main-text">
          <h1>
            Virtually travel the world with a personal live-streamer.
            {/* <span style={{ textDecoration: "underline" }}>anywhere</span>{" "} */}
          </h1>
          <p>
            See the world, attend a live event, or wander a museum through the
            eyes (well, camera) of your own live-streamer. Simply make a
            request, and our team will send a streamer the location of your
            choice.
          </p>
          <button className="Main-button">GET STARTED</button>
          <p></p>
          <p className="Tech-icons"> 4K | LIVE | Facebook | 360 | VR </p>
        </section>
      </div>
    );
  }
}
