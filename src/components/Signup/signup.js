import React, { Component } from "react";
import "./signup.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { registerUser } from "../../redux/Reducers/authReducer";
import axios from "axios";
import { storage } from "../../firebaseconfig";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class signup extends Component {
  state = {
    user_first_name: "",
    user_last_name: "",
    user_birth_date: new Date(),
    user_profile_img: "",
    user_email: "",
    user_password: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDateChange = date => {
    this.setState({
      user_birth_date: date
    });
  };
  handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = storage.ref(`/profile/${image.name}`).put(image);
      uploadTask.on("state_changed", () => {
        storage
          .ref("profile")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ user_profile_img: url });
          });
      });
    }
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
            <h1>Create Account</h1>
            <br />
            <label>
              Already have an account? <Link to="/login">Log in</Link>
            </label>
            <br />
            <br />
            <br />
            <input
              placeholder="email"
              className="Signup-input"
              name="user_email"
              onChange={this.handleInput}
            />
            <br />
            <br />
            <input
              placeholder="password"
              className="Signup-input"
              type="password"
              name="user_password"
              onChange={this.handleInput}
            />
            <br />
            <br />
            <input
              placeholder="first name"
              className="Signup-input"
              name="user_first_name"
              onChange={this.handleInput}
            />
            <br />
            <br />
            <input
              placeholder="last name"
              className="Signup-input"
              name="user_last_name"
              onChange={this.handleInput}
            />
            <br />
            <br />
            <DatePicker
              selected={this.state.user_birth_date}
              onChange={this.handleDateChange}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              maxDate={new Date()}
              // yearDropdownItemNumber={50}
              // dateFormatCalendar="MMMM"
            />
            <br />
            <br />
            <input
              // placeholder="profile img url"
              // className="Signup-input"
              // name="user_profile_img"
              // placeholder="paste url"
              // onChange={this.handleInput}
              className="Signup-input"
              type="file"
              name="user_profile_img"
              placeholder="upload"
              onChange={this.handleImage}
            />
            <br />
            <br />
            <button
              className="Signup-button"
              name="register"
              onClick={this.handleSubmit}
            >
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

export default connect(mapStateToProps, {
  registerUser
})(signup);
