import React, { Component } from "react";
import * as Datasource from "../../Datasources/Comments";
import Comment from "./Comment";

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments: Datasource.getComments()
    };
  }

  handleChange() {
    this.setState({
      comments: Datasource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}

export default CommentList;
