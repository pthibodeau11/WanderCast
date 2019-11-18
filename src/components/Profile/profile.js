import React, { Component } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { viewProfile } from "../../redux/Reducers/userReducer";
import Moment from "react-moment";

class profile extends Component {
  componentDidMount() {
    this.props.viewProfile();
  }

  render() {
    console.log(this.props);
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
              <div className="Profile-image">
                <img
                  src={
                    this.props.user[0] && this.props.user[0].user_profile_img
                  }
                />
              </div>
              <div>
                <label>First name:</label>
                <li>
                  {this.props.user[0] && this.props.user[0].user_first_name}
                </li>
              </div>
              <div>
                <label>Last name: </label>
                <li>
                  {this.props.user[0] && this.props.user[0].user_last_name}
                </li>
              </div>
              <div>
                <label>Email: </label>
                <li>{this.props.user[0] && this.props.user[0].user_email}</li>
              </div>
              <div>
                <label>Birthday: </label>
                <li>
                  <Moment format="L">
                    {this.props.user[0] && this.props.user[0].user_birth_date}
                  </Moment>
                </li>
              </div>
              <div>
                <label>Streamer Status: </label>
                <li>{streamer}</li>
              </div>
              <div className="Edit-button-box">
                <Link to="/profile/edit">
                  <button className="Edit-button">Edit info</button>
                </Link>
              </div>
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

export default connect(mapStateToProps, {
  viewProfile
})(profile);
