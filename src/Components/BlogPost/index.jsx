import React, { Component } from "react";
import * as Datasource from "../../Datasources/BlogPost";
import TextBlock from "../TextBlock";

export class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: Datasource.getBlogPost(props.id)
    };
  }

  handleChange() {
    this.setState({
      blogPost: Datasource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost[0].text} />;
  }
}

export default BlogPost;
