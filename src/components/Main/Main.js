import React, { Component } from "react";
import "./Main.css";
import MainOverview from "./MainOverview";
import MainEvents from "./MainEvents";

export default class Main extends Component {
  render() {
    return (
      <div className="Main-body">
        <MainOverview />
        <MainEvents />
      </div>
    );
  }
}
