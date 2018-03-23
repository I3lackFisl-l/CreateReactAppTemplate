import React, { Component } from "react";
// import { Helmet } from "react-helmet";
// import logo from "./images/logo.svg";
// import "./css/App.css";
import * as serviceUtils from "./Utilities/ServiceUtils";
import MapContainer from "./Map/MapContainer";

class App extends Component {
  constructor(props) {
    super(props);
    const config = process.env;
    this.state = {
      aaa: 123,
      bbb: 111,
      service: config.REACT_APP_SERVICE
    };
  }

  componentDidMount() {
    serviceUtils
      .fetchGet(
        "http://gdev.geotalent.co.th/MEAEVWebAPI/api/lookup/charger/list"
      )
      .then(result => console.log(result));
  }

  render() {
    // console.log({ ...this.state });
    // console.log(logo);
    return (
      <div>
        <MapContainer />
      </div>
    );
  }
}

export default App;
