import "./FlipCard.css";
import React from "react";

const FlipCard = (props) => {
  return (
    <div className="flip-card d-flex m-auto">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src="https://picsum.photos/300/300?random=1"
            alt="lorem"
            className="m-auto"
          />
        </div>
        <div className="flip-card-back d-flex flex-column justify-content-between">
          <h1 className="font-weight-bold text-info">
            {props.name}'s loves you
          </h1>
          <p className="font-weight-bold text-info">{props.value}</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
