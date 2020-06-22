import "../css/index.scss";
import React, { Component } from "react";
import firebase from "utils/firebase";

export default class FourDot extends Component {
  componentDidMount() {
    firebase.analytics();
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
