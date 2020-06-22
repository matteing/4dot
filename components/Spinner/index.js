import React, { Component } from "react";
import Logo from "components/Logo";

class Spinner extends Component {
  render() {
    return (
      <div className="Spinner">
        <Logo />
        {this.props.text ? (
          <div className="mt-4 text-gray-600">{this.props.text}</div>
        ) : null}
      </div>
    );
  }
}

export default Spinner;
