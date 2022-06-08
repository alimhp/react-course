import React, { Component } from "react";
class ClassTimer extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    this.mytimer = setInterval(() => {
      console.log("salam ali");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("cwum");
    clearInterval(this.mytimer);
  }
  render() {
    return <div>class interval</div>;
  }
}

export default ClassTimer;
