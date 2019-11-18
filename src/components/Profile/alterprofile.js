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
          <label>Enter New First Name:</label>
          <input
            name="user_first_name"
            onChange={this.handleInput}
            placeholder={this.props.user[0].user_first_name}
          />
          <label>Enter New Last Name:</label>
          <input name="user_last_name" onChange={this.handleInput} />
          <label>Enter New Birth Date</label>
          <input name="user_birth_date" onChange={this.handleInput} />
          <label>Upload New Profile Image</label>
          <input type="file" placeholder="upload" onChange={this.handleImage} />
          <Link to="/profile">
            <button onClick={this.handleEditSubmit}>Submit Changes</button>
          </Link>
          <Link to="/profile">
            <button>Cancel</button>
          </Link>
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
