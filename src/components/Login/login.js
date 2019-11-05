import React, { Component } from "react";
import "./login.css";
import { loginUser } from "../../redux/Reducers/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class login extends Component {
  state = {
    user_email: "",
    user_password: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.user_email);
    this.props.loginUser({
      user_email: this.state.user_email,
      user_password: this.state.user_password
    });
  };

  render() {
    if (this.props.userId) return <Redirect to="/mystreams" />;

    return (
      <>
        <div className="Login-background">
          <div className="Login-container">
            <h1>Enter login info</h1>
            <label>Email</label>
            <input name="user_email" onChange={this.handleInput} />
            <br />
            <br />
            <label>Password</label>
            <input name="user_password" onChange={this.handleInput} />
            <button name="login" onClick={this.handleSubmit}>
              Log In
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
    loginUser
  }
)(login);
