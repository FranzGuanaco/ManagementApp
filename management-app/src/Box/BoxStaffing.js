import React from 'react';
import "../Box/BoxPattern.css";

export default function BoxStaffing(props) {
  return (
    <div className="staffing-container">
      <div
        className="box"
        style={{
          position: "relative",
          bottom: props.top,
          left: props.margin,
          justifyContent: "center",
          marginTop: "2%"
        }}
      >
        <div className="circleStaff"></div>
        <div className="description">{props.projectName}</div>
        <div className="price">Prix</div>
        <div className="date">Date</div>
        <div className="progressbar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
}

BoxStaffing.defaultProps = {
  projectName: 'test'
};
