import React, { Component } from "react";
import "./login.css";
import { loginUser } from "../../redux/Reducers/authReducer";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

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
    this.props.loginUser({
      user_email: this.state.user_email,
      user_password: this.state.user_password
    });
  };

  render() {
    if (this.props.userId) return <Redirect to="/" />;

    return (
      <>
        <div className="Login-background">
          <div className="Login-container">
            <h1>Log into WanderCast </h1>
            <br />
            <label>
              Or <Link to="/signup">Create Account</Link>
            </label>
            <br />
            <br />
            <input
              placeholder="email"
              className="Login-input"
              name="user_email"
              onChange={this.handleInput}
            />
            <br />
            <input
              placeholder="password"
              className="Login-input"
              type="password"
              name="user_password"
              onChange={this.handleInput}
            />
            <button
              className="Login-button"
              name="login"
              onClick={this.handleSubmit}
            >
              LOGIN
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

export default connect(mapStateToProps, {
  loginUser
})(login);
