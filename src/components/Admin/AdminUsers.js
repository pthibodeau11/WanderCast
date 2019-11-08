import React, { Component } from "react";
import { connect } from "react-redux";
import "./admin.css";
import { getAllUsers } from "../../redux/Reducers/userReducer";

class AdminUsers extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    const usersMapped =
      this.props.users &&
      this.props.users.map(user => {
        return (
          <ul className="Admin-box">
            <li className="Admin-box-id">{user.user_id}</li>
            <li className="Admin-box-row">{user.user_first_name}</li>
            <li className="Admin-box-row">{user.user_last_name}</li>
            <li className="Admin-box-row">{user.user_email}</li>
          </ul>
        );
      });
    return (
      <div>
        <h2>All users</h2>
        <ul className="Admin-table">
          <li className="Admin-table-id">User ID</li>
          <li className="Admin-table-column">First name</li>
          <li className="Admin-table-column">Last name</li>
          <li className="Admin-table-column">Email</li>
        </ul>
        {usersMapped}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    users: reduxState.userReducer.users
  };
};

export default connect(
  mapStateToProps,
  {
    getAllUsers
  }
)(AdminUsers);
