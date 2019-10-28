import React, { Component } from "react";

class ClickablePage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(direction, drawer) {
    //opens drawer depending on direction...
    console.log(drawer);
  }

  render() {
    let { direction, drawer, ...children } = this.props;
    return (
      <div
        className="clickablePage"
        onClick={() => this.handleClick(direction, drawer)}
      >
        {...children}
      </div>
    );
  }
}

export default ClickablePage;
