import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    return (
      <div>
        <i>{this.props.comment.id}</i>
        <h3>{this.props.comment.name}</h3>
        <p>{this.props.comment.comment}</p>
      </div>
    );
  }
}
