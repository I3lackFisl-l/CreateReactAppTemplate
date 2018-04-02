import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Footer extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  routeClick = () => {
    this.props.routeClick();
  };

  render() {
    return (
      <div>
        <button onClick={this.routeClick}>Route Panel</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
