import React from "react";

import "./LocationItem.css";
const LocationsItem = (props) => {
  return (
    <li className="locationitem">
      <div className="locationitem-content">
        <div className="locationitem-pic">
          <img src={`http://localhost:5000/${props.pic}`} alt={props.title} />
        </div>
        <div className="locationitem-infor">
          <h1>{props.title}</h1>
          <h3>{props.desc}</h3>
          <p>{props.address}</p>
        </div>
      </div>
    </li>
  );
};

export default LocationsItem;
