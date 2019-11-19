import React, { Component } from "react";
import "./newapplication.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createApp } from "../../redux/Reducers/appReducer";
import { Redirect } from "react-router-dom";

class newapplication extends Component {
  state = {
    user_bio: "",
    user_experience: "",
    user_equipment: "",
    user_availability: "",
    user_portfolio_link: null,
    user_resume_link: null,
    redirect: false
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createApp(this.state);
    alert("submitted!");
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect === true) return <Redirect to="/" />;
    return (
      <>
        <div className="Newapplication-background">
          <div className="Newapplication-container">
            <h1>Application</h1>
            <br />
            <br />
            <div className="Newapplication-form-main">
              <div className="Newapplication-left">
                <div className="Newapplication-field">
                  <label>
                    Tell us a little bit about yourself and why you want to
                    become a WanderCast streamer:
                  </label>
                  <textarea name="user_bio" onChange={this.handleInput} />
                </div>
                <br />
                <div className="Newapplication-field">
                  <label>Tell us about your live-stream experience:</label>
                  <textarea
                    name="user_experience"
                    onChange={this.handleInput}
                  />
                </div>
                <br />
                <div className="Newapplication-field">
                  <label>
                    Give us some details about your live-stream/video equipment:
                  </label>
                  <textarea name="user_equipment" onChange={this.handleInput} />
                </div>
              </div>
              <div className="Newapplication-right">
                <div className="Newapplication-field">
                  <label>
                    What days/times are you available to live-stream:
                  </label>
                  <textarea
                    name="user_availability"
                    onChange={this.handleInput}
                  />
                </div>
                <br />
                <div className="Newapplication-field">
                  <label>(optional) Personal website/portfolio link:</label>
                  <input
                    name="user_portfolio_link"
                    onChange={this.handleInput}
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="Newapplication-submit-buttons">
              <Link to="/">
                <button name="apply" onClick={this.handleSubmit}>
                  SUBMIT
                </button>
              </Link>
              <Link to="/mystreams">
                <button>CANCEL</button>
              </Link>
            </div>
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

export default connect(mapStateToProps, {
  createApp
})(newapplication);
