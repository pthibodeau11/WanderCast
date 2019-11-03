import React, { Component } from "react";
import "./Header.css";
import logo from "../../logo512_red.png";
import mainlogo from "../../WanderCast_logo.png";
import Search from "../Search/Search";

export default class Header extends Component {
  render() {
    return (
      <div className="Nav-bar">
        <div className="Search-bar">
          <img src={logo} alt="Logo" />
          <div className="Search-component">
            <Search />
          </div>
        </div>
        <img src={mainlogo} alt="logo" />
        <ul className="Nav-links">
          <li className="Nav-link">Become a Streamer</li>
          <li className="Nav-link">Sign Up</li>
          <li className="Nav-link">Login</li>
        </ul>
      </div>
    );
  }
}
