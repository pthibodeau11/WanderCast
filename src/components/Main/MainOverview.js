import React, { Component } from "react";
import "./MainOverview.css";
import { Link } from "react-router-dom";

export default class MainOverview extends Component {
  render() {
    return (
      <div className="Main-overview">
        <section className="Main-text">
          <h1>
            Hire your own live-streamer
            {/* <span style={{ textDecoration: "underline" }}>anywhere</span>{" "} */}
          </h1>
          <p className="Main-sub-text">
            See the world, attend a live event, or wander a museum through the
            eyes (well, camera) of your own live-streamer. Simply make a
            request, and our team will send a streamer the location of your
            choice.
          </p>
          <div className="Main-button-box">
            <Link to="/signup">
              <button className="Main-button">GET STARTED</button>
            </Link>
          </div>
          <p></p>
          {/* <p className="Tech-icons"> 4K | LIVE | Facebook | 360 | VR </p> */}
        </section>
      </div>
    );
  }
}
