import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from "./images/logo.svg";
import "./css/App.css";
import * as serviceUtils from "./Utilities/ServiceUtils";
import MapContainer from "./Map/MapContainer";
import RouteForm from "./Containers/RouteForm";
import Footer from "./Containers/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    const config = process.env;
    this.state = {
      aaa: 123,
      bbb: 111,
      service: config.REACT_APP_SERVICE,
      panelVisibility: false
    };
  }

  componentDidMount() {
    serviceUtils
      .fetchGet(
        "http://gdev.geotalent.co.th/MEAEVWebAPI/api/lookup/charger/list"
      )
      .then(result => console.log(result));
  }

  openRoutePanel = () => {
    this.setState(prevState => ({
      panelVisibility: !prevState.panelVisibility
    }));
  };

  render() {
    // console.log({ ...this.state });
    // console.log(logo);
    const panelVisible = this.state.panelVisibility ? "" : "none";
    return (
      <div>
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
        </div>
        <MapContainer />
        <div
          style={{
            width: "20%",
            height: "100%",
            backgroundColor: "#ABB2B9",
            position: "absolute",
            right: 0,
            display: panelVisible
          }}
        >
          <RouteForm />
        </div>
        <div className="Footer">
          <Footer routeClick={this.openRoutePanel} />
        </div>
      </div>
    );
  }
}

export default App;
