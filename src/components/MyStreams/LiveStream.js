import React, { Component } from "react";
import "./mystreams.css";
import Iframe from "react-iframe";

export default class LiveStream extends Component {
  state = {
    videoLink: this.props.streamId
  };
  render() {
    // console.log(videoLink);
    return (
      <div>
        <Iframe
          className="Stream-box"
          url={`https://video.ibm.com/combined-embed/${this.state.videoLink}?videos=0`}
          styles={{ border: "1px black" }}
          webkitallowfullscreen
          allowfullscreen
          frameborder="no"
          width="952"
          height="356"
        ></Iframe>
      </div>
    );
  }
}
