import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
    };
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      a: 20,
    });
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate");
  };
  render() {
    console.log("Render");
    return <div>LifeCycle</div>;
  }
}
