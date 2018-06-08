import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./css/App.css";
import MapManager from "./Map/MapManager";
import Footer from "./Containers/Footer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as MapAction from "./Actions/MapAction";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My Title"
    };
  }

  componentDidMount() {
    const { MapAction } = this.props;
    MapAction.bindEvtExtentChange(this.onExtentChangeFunction);
  }

  onExtentChangeFunction = params => {
    this.setState(prevState => ({
      title: `${prevState.title} X : ${params.centerX} Y : ${params.centerY}`
    }));
  };

  onOutsideFooterClick = () => {
    console.log("onOutsideFooterClick");
  };

  onInsideFooterClick = () => {
    console.log("onInsideFooterClick");
  };

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.state.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <MapManager />
        <Footer onFooterClick={this.onOutsideFooterClick}>
          <Footer onFooterClick={this.onInsideFooterClick} />
          <input type="text" />
          <input type="text" />
        </Footer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  MapAction: bindActionCreators(MapAction, dispatch)
});

App.propTypes = {
  MapAction: PropTypes.object.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(App);
