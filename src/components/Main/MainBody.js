import React, { Component } from "react";
import "./MainBody.css";
import location from "../../icons and logos/location.png";
import personal from "../../icons and logos/personal.png";
import quality from "../../icons and logos/quality.png";
import ibm from "../../icons and logos/ibm.png";
import zendesk from "../../icons and logos/zendesk.png";
import google from "../../icons and logos/google.png";
import stripe from "../../icons and logos/stripe.png";
import nodemailer from "../../icons and logos/nodemailer.png";
import firebase from "../../icons and logos/firebase.png";

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
        <h4 className="Powered-by">Powered by:</h4>
        <div className="Partner-logos">
          <div className="Partner-logos-list">
            <img src={zendesk} alt="zendesk" />
            <img src={firebase} alt="firebase" />
            <img src={stripe} alt="stripe" />
            <img src={ibm} alt="ibm" />
            <img src={google} alt="google" />
            <img src={nodemailer} alt="nodemailer" />
          </div>
        </div>
      </>
    );
  }
}
