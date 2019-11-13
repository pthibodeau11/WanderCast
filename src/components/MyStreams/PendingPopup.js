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
                  <button onClick={() => this.toggleEdit("category")}>
                    edit
                  </button>
                </>
              ) : this.state.editField === "category" ? (
                <>
                  <label>Stream Category:</label>
                  <input
                    placeholder="new category"
                    name="streamCategory"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
                </>
              ) : (
                <>
                  <label>Stream Category:</label>
                  <li>{this.state.streamCategory}</li>
                  <button onClick={() => this.toggleEdit("category")}>
                    edit
                  </button>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Title:</label>
                  <li>{this.state.streamTitle}</li>
                  <button onClick={() => this.toggleEdit("title")}>edit</button>
                </>
              ) : this.state.editField === "title" ? (
                <>
                  <label>Stream Title:</label>
                  <input
                    placeholder="new title"
                    name="streamTitle"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
                </>
              ) : (
                <>
                  <label>Stream Title:</label>
                  <li>{this.state.streamTitle}</li>
                  <button onClick={() => this.toggleEdit("title")}>edit</button>
                </>
              )}
            </div>
            <div className="popup-desc">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Title:</label>
                  <li>{this.state.streamTitle}</li>
                  <button onClick={() => this.toggleEdit("title")}>edit</button>
                </>
              ) : (
                <>
                  <label>Stream Title:</label>
                  <input
                    placeholder="new title"
                    name="streamTitle"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Time:</label>
                  <li>{this.state.streamTime}</li>
                  <button onClick={() => this.toggleEdit("time")}>edit</button>
                </>
              ) : (
                <>
                  <label>Stream Time:</label>
                  <input
                    placeholder="new time"
                    name="streamTime"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Length:</label>
                  <li>{this.state.streamHours}</li>
                  <button onClick={() => this.toggleEdit("hours")}>edit</button>
                </>
              ) : (
                <>
                  <label>Stream Length:</label>
                  <input
                    placeholder="new hours"
                    name="streamHours"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Country:</label>
                  <li>{this.state.streamCountry}</li>
                  <button onClick={() => this.toggleEdit("country")}>
                    edit
                  </button>
                </>
              ) : (
                <>
                  <label>Stream Country:</label>
                  <input
                    placeholder="new country"
                    name="streamCountry"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Street:</label>
                  <li>{this.state.streamStreet}</li>
                  <button onClick={() => this.toggleEdit("street")}>
                    edit
                  </button>
                </>
              ) : (
                <>
                  <label>Stream Street:</label>
                  <input
                    placeholder="new street"
                    name="streamStreet"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream City:</label>
                  <li>{this.state.streamCity}</li>
                  <button onClick={() => this.toggleEdit("city")}>edit</button>
                </>
              ) : (
                <>
                  <label>Stream City:</label>
                  <input
                    placeholder="new city"
                    name="streamCity"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream State:</label>
                  <li>{this.state.streamCity}</li>
                  <button onClick={() => this.toggleEdit("city")}>edit</button>
                </>
              ) : (
                <>
                  <label>Stream City:</label>
                  <input
                    placeholder="new city"
                    name="streamCity"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
                </>
              )}
            </div>
            <div className="popup-body">
              {this.state.editField === "" ? (
                <>
                  <label>Stream Zip:</label>
                  <li>{this.state.streamZip}</li>
                  <button onClick={() => this.toggleEdit("zip")}>edit</button>
                </>
              ) : (
                <>
                  <label>Stream Zip:</label>
                  <input
                    placeholder="new zip"
                    name="streamZip"
                    onChange={this.handleInput}
                  ></input>
                  <button
                    onClick={() => {
                      this.submitEdit();
                    }}
                  >
                    submit
                  </button>
                  <button onClick={() => this.toggleEdit("")}>close</button>
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
