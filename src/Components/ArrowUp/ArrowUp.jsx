import React from "react";
import Arrowup from "../../Images/Icon/Arrow-up.png";
import "./ArrowUp.css";
const ArrowUp = () => {
  return (
    <div>
      <a href="#">
        <img className="arrow-up" src={Arrowup} alt="ArrowUp" />
      </a>
    </div>
  );
};

export default ArrowUp;
