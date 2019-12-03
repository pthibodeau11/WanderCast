import React, { Component } from "react";
import "./newstream.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  createStream,
  getPendingStreams
} from "../../redux/Reducers/streamReducer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-google-autocomplete";
const google = window.google;

class newstream extends Component {
  constructor() {
    super();
    this.state = {
      stream_name: "",
      stream_title: "",
      stream_desc: "",
      // stream_date: "",
      stream_time: new Date(),
      stream_hours: "",
      stream_category: "",
      stream_country: "",
      stream_street: "",
      stream_state: "",
      stream_city: "",
      stream_zip: "",
      redirect: false,
      googleMapLink: ""
      // startDate: new Date()
    };
    this.autocomplete = null;
  }

  componentDidMount() {
    const options = { types: ["address"] };
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePlaceSelect = () => {
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    try {
      this.setState({
        stream_name: addressObject.name,
        stream_country: address[6].long_name,
        stream_street: `${address[0].long_name} ${address[1].long_name}`,
        stream_city: address[3].short_name,
        stream_state: address[5].short_name,
        stream_zip: address[7].short_name,
        googleMapLink: addressObject.url
      });
    } catch (e) {
      alert("Whoops! Please enter a specific address");
    }

  };

  handleSubmit = e => {
    e.preventDefault();
    // if (
    //   this.state.stream_title === "" ||
    //   this.state.stream_desc === "" ||
    //   this.state.stream_time === "" ||
    //   this.state.stream_hours === "" ||
    //   this.state.stream_category === "" ||
    //   this.state.stream_country === "" ||
    //   this.state.stream_street === "" ||
    //   this.state.stream_state === "" ||
    //   this.state.stream_city === "" ||
    //   this.state.stream_zip === ""
    // ) {
    //   return alert("Please complete all fields");
    // } else {
    this.setState({ redirect: true });
    this.props.createStream(this.state);
    alert(
      "stream request submitted! A WanderCast team member will review and be back shortly!"
    );
    // }
  };

  handleChange = date => {
    this.setState({
      stream_time: date
    });
  };

  render() {
    if (this.state.redirect === true) return <Redirect to="/" />;
    return (
      <>
        <div className="Newstream-background">
          <div className="Newstream-container">
            <h1>New Stream Request Form</h1>
            <br />
            <br />
            <div className="Newstream-form-main">
              <div className="Newstream-left">
                <div className="Newstream-field">
                  <label>Category:</label>
                  <input name="stream_category" onChange={this.handleInput} />
                </div>
                <br />
                <div className="Newstream-field">
                  <label>Title / brief description</label>
                  <textarea name="stream_title" onChange={this.handleInput} />
                </div>
                <br />
                <div className="Newstream-field">
                  <label>Detailed description:</label>
                  <textarea name="stream_desc" onChange={this.handleInput} />
                </div>
                <br />
              </div>

              <div className="Newstream-right">
                <div className="Newstream-field">
                  <label>Day/time you need the streamer:</label>

                  <DatePicker
                    selected={this.state.stream_time}
                    onChange={this.handleChange}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                </div>
                <br />
                <div className="Newstream-field">
                  <label>Hours you will need the streamer:</label>
                  <div className="Newstream-hours">
                    <input name="stream_hours" onChange={this.handleInput} />
                    <p>hrs</p>
                  </div>
                </div>
                {/* <label className="Stream-location-label">
                  Stream location:
                </label> */}
                <div className="Newstream-field-select-location">
                  <label>Select location (up/down arrows to select):</label>
                </div>
                <form className="Google-location-search">
                  <input
                    id="autocomplete"
                    className="input-field"
                    ref="input"
                    type="text"
                  />
                  <input
                    className="Google-location-input"
                    name={"name"}
                    value={this.state.stream_name}
                    placeholder={"Name"}
                    onChange={this.handleChange}
                  />
                  <input
                    className="Google-location-input"
                    name={"street_address"}
                    value={this.state.stream_street}
                    placeholder={"Street Address"}
                    onChange={this.handleChange}
                  />
                  <input
                    className="Google-location-input"
                    name={"city"}
                    value={this.state.stream_city}
                    placeholder={"City"}
                    onChange={this.handleChange}
                  />
                  <input
                    className="Google-location-input"
                    name={"state"}
                    value={this.state.stream_state}
                    placeholder={"State"}
                    onChange={this.handleChange}
                  />
                  <input
                    className="Google-location-input"
                    name={"zip_code"}
                    value={this.state.stream_zip}
                    placeholder={"Zipcode"}
                    onChange={this.handleChange}
                  />
                </form>
                <br />
              </div>
            </div>
            <div className="Submit-buttons">
              <button name="request" onClick={this.handleSubmit}>
                SUBMIT
              </button>
              <Link to="/mystreams">
                <button>CANCEL</button>
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
    streams: reduxState.streamReducer.streams,
    pending: reduxState.streamReducer.pending
  };
};

export default connect(mapStateToProps, {
  createStream,
  getPendingStreams
})(newstream);
