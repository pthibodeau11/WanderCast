import React, { Component } from "react";
import "./AlterProfile.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editProfile, viewProfile } from "../../redux/Reducers/userReducer";
import { storage } from "../../firebaseconfig";

class AlterProfile extends Component {
  constructor() {
    super();
    this.state = {
      user_first_name: "",
      user_last_name: "",
      user_birth_date: "",
      user_profile_img: ""
    };
  }

  componentDidMount() {
    this.props.viewProfile();
    console.log(this.props);
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditSubmit = () => {
    const {
      user_first_name,
      user_last_name,
      user_birth_date,
      user_profile_img
    } = this.state;
    this.props.editProfile({
      user_first_name,
      user_last_name,
      user_birth_date,
      user_profile_img
    });
    alert("profile updated!");
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

  render() {
    return (
      <>
        <div className="AlterProfile-background">
          <div className="AlterProfile-container">
            <h1>Edit Profile</h1>
            {/* <label>Enter New First Name:</label> */}
            <input
              placeholder="enter new first name"
              className="AlterProfile-input"
              name="user_first_name"
              onChange={this.handleInput}
            />
            {/* <label>Enter New Last Name:</label> */}
            <input
              placeholder="enter new last name"
              className="AlterProfile-input"
              name="user_last_name"
              onChange={this.handleInput}
            />
            {/* <label>Enter New Birth Date</label> */}
            <input
              placeholder="enter new birth date"
              className="AlterProfile-input"
              name="user_birth_date"
              onChange={this.handleInput}
            />
            <label>Upload New Profile Image</label>
            <label for="file-upload" className="Custom-file-upload">
              Browse
            </label>
            <br />
            <br />
            {/* <input for="file-upload" placeholder="upload"></input> */}
            <input
              id="file-upload"
              className="Default-file-upload"
              type="file"
              placeholder="upload"
              onChange={this.handleImage}
            />
            <div className="AlterProfile-submit-buttons">
              <Link to="/profile">
                <button
                  className="AlterProfile-button"
                  onClick={this.handleEditSubmit}
                >
                  Submit
                </button>
              </Link>
              <Link to="/profile">
                <button className="AlterProfile-button">Cancel</button>
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
    user: reduxState.userReducer.user
  };
};

export default connect(mapStateToProps, {
  editProfile,
  viewProfile
})(AlterProfile);
