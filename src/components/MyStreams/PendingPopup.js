import React, { Component } from "react";
import "./Popup.css";
import { connect } from "react-redux";
import {
  editPendingStream,
  getPendingStreams
} from "../../redux/Reducers/streamReducer";

class PendingPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamId: this.props.streamId,
      streamCategory: this.props.streamCategory,
      streamTitle: this.props.streamTitle,
      streamDesc: this.props.streamDesc,
      streamTime: this.props.streamTime,
      streamHours: this.props.streamHours,
      streamCountry: this.props.streamCountry,
      streamStreet: this.props.streamStreet,
      streamCity: this.props.streamCity,
      streamState: this.props.streamState,
      streamZip: this.props.streamZip,
      editField: ""
    };
  }
  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  toggleEdit = e => {
    this.setState({ editField: e });
  };
  submitEdit = async () => {
    const {
      streamId,
      streamCategory,
      streamTitle,
      streamDesc,
      streamTime,
      streamHours,
      streamCountry,
      streamStreet,
      streamCity,
      streamState,
      streamZip
    } = this.state;
    await this.props.editPendingStream(streamId, {
      streamCategory: streamCategory,
      streamTitle: streamTitle,
      streamDesc: streamDesc,
      streamTime: streamTime,
      streamHours: streamHours,
      streamCountry: streamCountry,
      streamStreet: streamStreet,
      streamCity: streamCity,
      streamState: streamState,
      streamZip: streamZip
    });
    await this.props.getPendingStreams();
    this.toggleEdit("");
  };
  render() {
    return (
      <div>
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-close-button-div">
              <span
                className="popup-close-button"
                onClick={this.props.closePopup}
              >
                X
              </span>
            </div>
            <div>
              <h1 className="popup-header">Review / Edit</h1>
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Category:</label>
                  <li>{this.state.streamCategory}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("category")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "category" ? (
                <>
                  <label>Stream Category:</label>
                  <input
                    placeholder="new category"
                    name="streamCategory"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream Category:</label>
                  <li>{this.state.streamCategory}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("category")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
            {/* Title */}
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Title:</label>
                  <li>{this.state.streamTitle}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("title")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "title" ? (
                <>
                  <label>Stream Title:</label>
                  <input
                    placeholder="new title"
                    name="streamTitle"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream Title:</label>
                  <li>{this.state.streamTitle}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("title")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
            {/* Desc */}
            <div className="popup-desc">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Desc:</label>
                  <text>{this.state.streamDesc}</text>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("desc")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "desc" ? (
                <>
                  <label>Stream Desc:</label>
                  <input
                    placeholder="new desc"
                    name="streamDesc"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream Desc:</label>
                  <li>{this.state.streamDesc}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("desc")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
            {/* Time */}
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Time:</label>
                  <li>{this.state.streamTime}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("time")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "time" ? (
                <>
                  <label>Stream Time:</label>
                  <input
                    placeholder="new time"
                    name="streamTime"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream Time:</label>
                  <li>{this.state.streamTime}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("time")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Length:</label>
                  <li>{this.state.streamHours}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("hours")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "hours" ? (
                <>
                  <label>Stream Length:</label>
                  <input
                    placeholder="new hours"
                    name="streamHours"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream Length:</label>
                  <li>{this.state.streamHours}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("hours")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Country:</label>
                  <li>{this.state.streamCountry}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("country")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "country" ? (
                <>
                  <label>Stream Country:</label>
                  <input
                    placeholder="new country"
                    name="streamCountry"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream Country:</label>
                  <li>{this.state.streamCountry}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("country")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Street:</label>
                  <li>{this.state.streamStreet}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("street")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "street" ? (
                <>
                  <label>Stream Street:</label>
                  <input
                    placeholder="new street"
                    name="streamStreet"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream Street:</label>
                  <li>{this.state.streamStreet}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("street")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream City:</label>
                  <li>{this.state.streamCity}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("city")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "city" ? (
                <>
                  <label>Stream City:</label>
                  <input
                    placeholder="new city"
                    name="streamCity"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream City:</label>
                  <li>{this.state.streamCity}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("city")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream State:</label>
                  <li>{this.state.streamState}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("state")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "state" ? (
                <>
                  <label>Stream State:</label>
                  <input
                    placeholder="new state"
                    name="streamState"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream State:</label>
                  <li>{this.state.streamState}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("state")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Zip:</label>
                  <li>{this.state.streamZip}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("zip")}
                  >
                    edit
                  </span>
                </>
              ) : this.state.editField === "zip" ? (
                <>
                  <label>Stream Zip:</label>
                  <input
                    placeholder="new zip"
                    name="streamZip"
                    onChange={this.handleInput}
                  ></input>
                  <span
                    className="popup-edit-button"
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </span>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("")}
                  >
                    close
                  </span>
                </>
              ) : (
                <>
                  <label>Stream Zip:</label>
                  <li>{this.state.streamZip}</li>
                  <span
                    className="popup-edit-button"
                    onClick={() => this.toggleEdit("zip")}
                  >
                    edit
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    pending: reduxState.streamReducer.pending
  };
};

export default connect(
  mapStateToProps,
  {
    editPendingStream,
    getPendingStreams
  }
)(PendingPopup);
