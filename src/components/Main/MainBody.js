import React, { Component } from "react";
import "./MainBody.css";

export default class MainBody extends Component {
  render() {
    return (
      <>
        <div className="Differentiators">
          <div className="Diff-box">
            <p>The WanderCast difference</p>
          </div>
          <div className="Diff-box">
            <span>Icon #1</span>
            <h1>Go anywhere</h1>
            <p>Our streamers aren't attached to their desktops at home. </p>
          </div>
          <div className="Diff-box">
            <span>Icon #2</span>
            <h1>Private</h1>
            <p>Talk 1-on-1 directly to your streamer or invite your friends</p>
          </div>
          <div className="Diff-box">
            <span>Icon #3</span>
            <h1>High-quality</h1>
            <p>
              Our streamers have been vetted to provide high-quality streams.
            </p>
          </div>
        </div>
        <div className="Partner-logos">
          <h1>Logo #1</h1>
          <h1>Logo #2</h1>
          <h1>Logo #3</h1>
          <h1>Logo #4</h1>
          <h1>Logo #5</h1>
        </div>
      </>
    );
  }
}
