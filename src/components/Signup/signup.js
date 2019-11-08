import React, { Component } from "react";
import "./signup.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../redux/Reducers/authReducer";
import axios from "axios";

class signup extends Component {
  state = {
    user_first_name: "",
    user_last_name: "",
    user_birth_date: "",
    user_profile_img: "",
    user_email: "",
    password: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
    const name = this.state.user_first_name;
    const email = this.state.user_email;
    axios({
      method: "POST",
      url: "http://localhost:7777/send/welcome",
      data: {
        name: name,
        email: email
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  render() {
    console.log(this.props.userId);
    if (this.props.userId) return <Redirect to="/" />;

    return (
      <>
        <div className="Signup-background">
          <div className="Signup-container">
            <h1>Register</h1>
            <label>Email (this will be your username)</label>
            <input name="user_email" onChange={this.handleInput} />
            <br />
            <br />
            <label>Password</label>
            <input
              type="password"
              name="user_password"
              onChange={this.handleInput}
            />
            <br />
            <br />
            <label>First Name</label>
            <input name="user_first_name" onChange={this.handleInput} />
            <br />
            <br />
            <label>Last Name</label>
            <input name="user_last_name" onChange={this.handleInput} />
            <br />
            <br />
            <label>Birthday</label>
            <input
              name="user_birth_date"
              placeholder="yyyy-mm-dd"
              onChange={this.handleInput}
            />
            <br />
            <br />
            <label>Profile image</label>
            <input
              name="user_profile_img"
              placeholder="paste url"
              onChange={this.handleInput}
            />
            <br />
            <br />
            <button name="register" onClick={this.handleSubmit}>
              Create account
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userId: reduxState.authReducer.userId
  };
};

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(signup);
