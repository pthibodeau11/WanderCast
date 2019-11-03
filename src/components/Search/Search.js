import React, { Component } from "react";
import "./Search.css";
import searchicon from "../../search_icon.png";

export default class Search extends Component {
  render() {
    return (
      <div className="Search-box">
        <img src={searchicon} alt="icon_img" />
        <input
          className="Search-field"
          placeholder="Search"
          type="text"
        ></input>
      </div>
    );
  }
}
