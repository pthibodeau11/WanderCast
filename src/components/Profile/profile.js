import React, { Component } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { viewProfile } from "../../redux/Reducers/userReducer";

class profile extends Component {
  componentDidMount() {
    this.props.viewProfile();
  }
  render() {
    console.log(this.props.user[0] && this.props.user[0].isstreamer);
    let streamer = "";
    if (!(this.props.user[0] && this.props.user[0].isstreamer)) {
      streamer = "Apply to be Streamer";
    } else {
      streamer = "You are a streamer";
    }
    return (
      <>
        <div className="Profile-background">
          <div className="Profile-container">
            <div className="Profile-info">
              <label>First name:</label>
              <li>
                {this.props.user[0] && this.props.user[0].user_first_name}
              </li>
              <label>Last name: </label>
              <li>{this.props.user[0] && this.props.user[0].user_last_name}</li>
              <label>Email: </label>
              <li>{this.props.user[0] && this.props.user[0].user_email}</li>
              <label>Birthday: </label>
              <li>
                {this.props.user[0] && this.props.user[0].user_birth_date}
              </li>
              <label>Streamer Status: </label>
              <li>{streamer}</li>
              <Link to="/profile/edit">
                <button>Edit info</button>
              </Link>
            </div>
            <div className="Profile-image">
              <label>Profile pic</label>
              <p>{this.props.user[0] && this.props.user[0].user_profile_img}</p>
              <button>Change pic</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  {
    viewProfile
  }
)(profile);
