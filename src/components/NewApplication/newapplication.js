import React, { Component } from "react";
import "./newapplication.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createApp } from "../../redux/Reducers/appReducer";

class newapplication extends Component {
  state = {
    user_bio: "",
    user_experience: "",
    user_equipment: "",
    user_availability: "",
    user_portfolio_link: null,
    user_resume_link: null
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createApp(this.state);
    alert("submitted!");
  };
  render() {
    return (
      <>
        <div className="Newapplication-background">
          <div className="Newapplications-container">
            <h1>Apply to become a WanderCast streamer!</h1>
            <label>
              Tell us a little bit about yourself and why you want to become a
              WanderCast streamer:
            </label>
            <textarea name="user_bio" onChange={this.handleInput} />
            <br />
            <br />
            <label>Tell us about your live-stream/video experience:</label>
            <textarea name="user_experience" onChange={this.handleInput} />
            <br />
            <br />
            <label>
              Give us some details about your live-stream/video equipment:
            </label>
            <textarea name="user_equipment" onChange={this.handleInput} />
            <br />
            <br />
            <label>What days/times are you available to live-stream:</label>
            <textarea name="user_availability" onChange={this.handleInput} />
            <br />
            <br />
            <label>(optional) Personal website/portfolio link:</label>
            <input name="user_portfolio_link" onChange={this.handleInput} />
            <br />
            <br />
            <button>Upload Resume</button>
            <br />
            <br />
            <Link to="/">
              <button name="apply" onClick={this.handleSubmit}>
                Submit Application
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    applications: reduxState.appReducer.applications
  };
};

export default connect(
  mapStateToProps,
  {
    createApp
  }
)(newapplication);
