import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/Reducers/authReducer";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import logo from "../../logo512_red.png";
import mainlogo from "../../WanderCast_logo.png";
import Search from "../Search/Search";

function Header(props) {
  const { userId } = props;
  const { isAdmin } = props;
  console.log(props);

  return (
    <div className="Nav-bar">
      {/* <div className="Search-bar">
        <img src={logo} alt="Logo" />
        <div className="Search-component">
          <Search />
        </div>
      </div> */}
      <Link to={"/"}>
        <img className="Main-header-logo" src={mainlogo} alt="logo" />
      </Link>
      <ul className="Nav-links">
        {isAdmin ? (
          <>
            <Link to={"/newapplication"}>
              <li className="Nav-link">Become a Streamer</li>
            </Link>
            <Link to={"/newstream"}>
              <li className="Nav-link">New request</li>
            </Link>
            <Link to={"/mystreams"}>
              <li className="Nav-link">My streams</li>
            </Link>
            <Link to={"/profile"}>
              <li className="Nav-link">Profile</li>
            </Link>
            <Link to={"/admin"}>
              <li className="Nav-link">Admin</li>
            </Link>
            <li
              className="Nav-link"
              onClick={() => {
                props.logoutUser().then(() => props.history.push("/"));
              }}
            >
              Logout
            </li>
          </>
        ) : userId ? (
          <>
            <Link to={"/newapplication"}>
              <li className="Nav-link">Become a Streamer</li>
            </Link>
            <Link to={"/newstream"}>
              <li className="Nav-link">New request</li>
            </Link>
            <Link to={"/mystreams"}>
              <li className="Nav-link">My streams</li>
            </Link>
            <Link to={"/profile"}>
              <li className="Nav-link">Profile</li>
            </Link>
            <li
              className="Nav-link"
              onClick={() => {
                props.logoutUser().then(() => props.history.push("/"));
              }}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <Link to={"/signup"}>
              <li className="Nav-link">Sign Up</li>
            </Link>
            <Link to={"/login"}>
              <li className="Nav-link">Login</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    userId: reduxState.authReducer.userId,
    isAdmin: reduxState.authReducer.isAdmin
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      logoutUser
    }
  )(Header)
);
