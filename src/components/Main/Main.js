import React, { Component } from "react";
import "./Main.css";
import MainOverview from "./MainOverview";
import MainBody from "./MainBody";

export default class Main extends Component {
  render() {
    return (
      <div className="Main-body">
        <MainOverview />
        <MainBody />
      </div>
    );
  }
}
