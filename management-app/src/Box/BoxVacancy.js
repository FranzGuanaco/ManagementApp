import React from "react";
import "./BoxPattern.css";
import Pic from "../Picture/Pic";
import EditButton from "../Button/EditButton";

function BoxVacancy(props) {
  return (
    <div
      className="box"
      style={{
        position: "relative",
        width: props.width,
        height: props.height,
        bottom: props.top,
        marginTop: props.marginTop,
        left: props.margin,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "4%",
          width: "30%",
          height: "auto",
        }}
      >
        <Pic />
      </div>

        <h3>{props.text1}</h3>
        <h3>{props.text2}</h3>
    </div>
  );
}

export default BoxVacancy;