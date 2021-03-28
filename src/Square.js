import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  state = {};
  render() {
    return (
      <div className="outsideBlock">
        <div className="insideBlock">
            <h3>John Doe</h3>
            <p>About me</p>
        </div>
        <img className="" src="https://picsum.photos/600/600?random=2" alt="" />
      </div>
    );
  }
}

export default Square;
