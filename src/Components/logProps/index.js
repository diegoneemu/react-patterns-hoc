import React, { Component } from "react";

export default function logProps(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        changeQty: 0
      };
    }

    componentDidMount() {
      console.log(`mounted`);
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log("next props: ", nextProps);
      console.log("next state: ", nextState);
    }

    componentDidUpdate(prevProps) {
      console.log("Current props: ", this.props);
      console.log("Previous props: ", prevProps);
    }

    componentWillUnmount() {
      console.log("component will be unmounted");
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
