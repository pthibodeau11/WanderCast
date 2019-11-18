import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/Reducers/authReducer";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import logo from "../../logo512_red.png";
import menu from "../../icons and logos/menu-button.png";
import mainlogo from "../../WanderCast_logo.png";
import Search from "../Search/Search";
import { render } from "react-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuStatus: "menu-open",
      menuRef: React.createRef()
    };
  }
  handleClick = e => {
    const node = this.state.menuRef.current;
    if (node.className === "menu-open") {
      node.className = "menu-close";
    } else {
      node.className = "menu-open";
    }
  };

  render() {
    const { userId } = this.props;
    const { isAdmin } = this.props;
    console.log(this.props);
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
                  this.props
                    .logoutUser()
                    .then(() => this.props.history.push("/"));
                }}
              >
                Logout
              </li>
            </>
          ) : userId ? (
            <>
              <div className="Browser-view-links">
                <Link to={"/newstream"}>
                  <li className="Nav-link">New request</li>
                </Link>
                <Link to={"/profile"}>
                  <li className="Nav-link">Profile</li>
                </Link>
                <Link to={"/mystreams"}>
                  <li className="Nav-link">My streams</li>
                </Link>
                <Link to={"/newapplication"}>
                  <li className="Nav-link">Become a Streamer</li>
                </Link>
                <li
                  className="Nav-link"
                  onClick={() => {
                    this.props
                      .logoutUser()
                      .then(() => this.props.history.push("/"));
                  }}
                >
                  Logout
                </li>
              </div>
              <div className="Responsive-view-links">
                <Link to={"/newstream"}>
                  <li className="Nav-link">New request</li>
                </Link>
                <img src={menu} alt="ham_menu" onClick={this.handleClick} />
                <menu id="menu" ref={this.state.menuRef}>
                  <ul className="drop-down">
                    <Link to={"/profile"}>
                      <li
                        className="Drop-down-nav-link"
                        onClick={this.handleClick}
                      >
                        Profile
                      </li>
                    </Link>
                    <Link to={"/mystreams"}>
                      <li
                        className="Drop-down-nav-link"
                        onClick={this.handleClick}
                      >
                        My streams
                      </li>
                    </Link>
                    <Link to={"/newapplication"}>
                      <li
                        className="Drop-down-nav-link"
                        onClick={this.handleClick}
                      >
                        Become a Streamer
                      </li>
                    </Link>
                    <li
                      className="Drop-down-nav-link"
                      onClick={() => {
                        this.props
                          .logoutUser()
                          .then(() => this.props.history.push("/"));
                        this.handleClick();
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                </menu>
              </div>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <li className="Nav-link">LOGIN</li>
              </Link>
              <Link to={"/signup"}>
                <li className="Nav-link-signup">GET STARTED</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userId: reduxState.authReducer.userId,
    isAdmin: reduxState.authReducer.isAdmin
  };
};

export default withRouter(
  connect(mapStateToProps, {
    logoutUser
  })(Header)
);
