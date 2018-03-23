import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from "./images/logo.svg";
import clock from "./images/alarmClock.jpg";
import "./css/App.css";
import * as serviceUtils from "./Utilities/ServiceUtils";

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
    const config = process.env;
    // console.log({ ...this.state });
    // console.log(logo);
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{process.env.NODE_ENV}</p>
        <p>{process.env.REACT_APP_SECRET_CODE}</p>
        <p>{config.REACT_APP_SERVICE}</p>
        <img src={clock} className="Clock" alt="clock" />
      </div>
    );
  }
}

export default App;
