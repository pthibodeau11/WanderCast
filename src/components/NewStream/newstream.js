import React, { Component } from "react";
import "./newstream.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStream } from "../../redux/Reducers/streamReducer";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class newstream extends Component {
  state = {
    stream_title: "",
    stream_desc: "",
    // stream_date: "",
    stream_time: new Date(),
    stream_hours: "",
    stream_category: "",
    stream_country: "",
    stream_street: "",
    stream_state: "",
    stream_city: "",
    stream_zip: ""
    // startDate: new Date()
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createStream(this.state);
    alert(
      "stream request submitted! A WanderCast team member will review and be back shortly!"
    );
  };

  handleChange = date => {
    this.setState({
      stream_time: date
    });
    console.log(this.state.stream_time);
  };

  render() {
    return (
      <>
        <div className="Newstream-background">
          <div className="Newstream-container">
            <h1>New stream request form</h1>
            <div className="Newstream-field">
              <label>Select/enter a category for this stream request:</label>
              <input name="stream_date" onChange={this.handleInput} />
            </div>
            <div className="Newstream-field">
              <label>Stream title / brief description of request</label>
              <textarea name="stream_title" onChange={this.handleInput} />
            </div>
            <div className="Newstream-field">
              <label>Describe your stream request in detail:</label>
              <textarea name="stream_desc" onChange={this.handleInput} />
            </div>

            <div className="Newstream-field">
              <label>What day/time will the streamer need to arrive?</label>

              <DatePicker
                selected={this.state.stream_time}
                onChange={this.handleChange}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
            <div className="Newstream-field">
              <label>How many hours will you need the streamer?</label>
              <div className="Newstream-hours">
                <input name="stream_hours" onChange={this.handleInput} />
                <p>hrs</p>
              </div>
            </div>
            <br />
            <label>Stream location details:</label>
            <div className="Newstream-location-fields">
              <input
                placeholder="Country"
                name="stream_country"
                onChange={this.handleInput}
              />
              <input
                placeholder="Street"
                name="stream_street"
                onChange={this.handleInput}
              />
              <input
                placeholder="State"
                name="stream_state"
                onChange={this.handleInput}
              />
              <input
                placeholder="City"
                name="stream_city"
                onChange={this.handleInput}
              />
              <input
                placeholder="Zip"
                name="stream_zip"
                onChange={this.handleInput}
              />
            </div>
            <br />
            <br />
            <Link to="/mystreams">
              <button name="request" onClick={this.handleSubmit}>
                Submit Stream Request
              </button>
            </Link>
            <Link to="/mystreams">
              <button>Cancel</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    streams: reduxState.streamReducer.streams
  };
};

export default connect(
  mapStateToProps,
  {
    createStream
  }
)(newstream);
