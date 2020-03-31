import React, { Component } from "react";
import * as Datasource from "../../Datasources";

function withSubscription(WrappedComponent, selectData) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(Datasource, props)
      };
    }

    handleChange() {
      this.setState({ data: selectData(Datasource, this.props) });
    }

    render() {
      return (
        <>
          <hr />
          <WrappedComponent data={this.state.data} {...this.props} />
          <hr />
        </>
      );
    }
  };
}

export default withSubscription;
