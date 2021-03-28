import "./FlipCard.css";
import React from "react";

const FlipCard = (props) => {
  return (
    <div className="flip-card d-flex m-auto">
      <div className="flip-card-inner">
        <div className="flip-card-front d-flex flex-column justify-content-between">
          <h3 className="mt-3">
            {props.name}'s loves you
          </h3>
          <p>{props.value}</p>
          <p className="mb-3">We love that guy</p>
          <img
            src="https://picsum.photos/400/400?random=1"
            alt="lorem"
            className="m-auto"
          />
        </div>
        <div className="flip-card-back ">
          <img
            src="https://picsum.photos/400/400?random=1"
            alt="lorem"
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
