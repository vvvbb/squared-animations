import React, { Component } from "react";
import "./SquareSlide.scss";

class SquareSlide extends Component {


  render() {
    return (
      <div className="outsideBlock--Slide">
        <div className="insideBlock">
            <h3>{this.props.name} never lose</h3>
            <p>{this.props.name} either win or {this.props.name} learn</p>
        </div>
        <img className="" src="https://picsum.photos/600/600?random=3" alt="" />
      </div>
    );
  }
}

export default SquareSlide;
