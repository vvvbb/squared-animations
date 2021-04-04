import "./FlipCard.scss";
import React from "react";

const FlipCard = (props) => {
  return (
    <div className="flip-card d-flex m-auto">
      <div className="flip-card-inner text-uppercase outsideBlock--Flip">
        {/* <div className="flip-card-front d-flex flex-column justify-content-between"> */}
        <div className="flip-card-front insideBlock">
          <h3 className="">
            {props.name} never lose
          </h3>
          <p>{props.name} either win</p>
          <p className="">or {props.name} learn</p>
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
