import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  state = {};
  render() {
    return (

    <a href="" className="outsideBlock border border-info">
			<div className="insideBlock d-flex flex-column justify-content-between h-100 w-100">
				<div className="">
					<h3 className="text-center">John Doe</h3>
				</div>
				<div>
					<p className="text-center text-uppercase">
						About me</p>
				</div>
			</div>
			<img className="" src="https://picsum.photos/600/600?random=2" alt=""/>
		</a>

    );
  }
}

export default Square;