import React, { Component } from "react";
import "./AlterProfile.css";
import { connect } from "react-redux";
import { editProfile } from "../../redux/Reducers/userReducer";

class AlterProfile extends Component {
  state = {
    user_first_name: "",
    user_last_name: "",
    user_birth_date: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditSubmit = () => {
    const { userId } = this.props;

    this.props.editProfile([
      userId,
      user_first_name,
      user_last_name,
      user_birth_date
    ]);
  };

  render() {
    return (
      <>
        <div className="AlterProfile-background">
          <input name="user_first_name" onChange={this.handleInput} />
          <input name="user_last_name" onChange={this.handleInput} />
          <input name="user_birth_date" onChange={this.handleInput} />
          <button onClick={this.handleEditSubmit}>Submit Changes</button>
        </div>
      </>
    );
  }
}

export default connect(
  null,
  {
    editProfile
  }
)(AlterProfile);
