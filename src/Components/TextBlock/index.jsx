import React, { Component } from "react";

export default class TextBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}
