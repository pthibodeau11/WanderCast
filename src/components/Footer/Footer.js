import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer-main">
        <h1>This will be the footer section</h1>
        <Link to="/contactus">
          <button>Contact Us</button>
        </Link>
      </div>
    );
  }
}
