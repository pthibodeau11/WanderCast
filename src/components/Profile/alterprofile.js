import React, { Component } from "react";
import "./AlterProfile.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editProfile, viewProfile } from "../../redux/Reducers/userReducer";

class AlterProfile extends Component {
  state = {
    user_first_name: "",
    user_last_name: "",
    user_birth_date: ""
  };

  componentDidMount() {
    this.props.viewProfile();
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditSubmit = () => {
    const { user_first_name, user_last_name, user_birth_date } = this.state;
    this.props.editProfile({
      user_first_name,
      user_last_name,
      user_birth_date
    });
    alert("profile updated!");
  };

  render() {
    return (
      <>
        <div className="AlterProfile-background">
          <label>Enter New First Name:</label>
          <input
            name="user_first_name"
            onChange={this.handleInput}
            // value={this.props.user[0].user_first_name}
          />
          <label>Enter New Last Name:</label>
          <input name="user_last_name" onChange={this.handleInput} />
          <label>Enter New Birth Date</label>
          <input name="user_birth_date" onChange={this.handleInput} />
          <Link to="/profile">
            <button onClick={this.handleEditSubmit}>Submit Changes</button>
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

export default connect(
  mapStateToProps,
  {
    editProfile,
    viewProfile
  }
)(AlterProfile);
