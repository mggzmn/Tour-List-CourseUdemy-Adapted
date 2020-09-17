import React, { useState } from "react";
import "./tour.scss";

export default function Tour(props) {
  const { id, city, img, name, info } = props.tour;
  const { removeTour } = props;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="tour" />
        <span
          className="close-btn"
          onClick={() => {
            removeTour(id);
          }}>
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span>
            <i
              className="fas fa-caret-square-down"
              onClick={() => setShowInfo(!showInfo)}></i>
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
}
