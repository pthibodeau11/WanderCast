import React, { Component } from "react";
import "./MainBody.css";
import location from "../../icons and logos/location.png";
import personal from "../../icons and logos/personal.png";
import quality from "../../icons and logos/quality.png";

export default class MainBody extends Component {
  render() {
    return (
      <>
        <div className="Differentiators">
          {/* <div className="Diff-box">
            <p>The WanderCast difference</p>
          </div> */}
          <div className="Diff-box">
            <img src={location} alt="Icon #1" />
            <h1>Go anywhere</h1>
            <p>Our streamers aren't attached to their desktops at home. </p>
          </div>
          <div className="Diff-box">
            <img src={personal} alt="icon #2" />
            <h1>Private</h1>
            <p>Talk 1-on-1 directly to your streamer or invite your friends</p>
          </div>
          <div className="Diff-box">
            <img src={quality} alt="icon #3" />
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
