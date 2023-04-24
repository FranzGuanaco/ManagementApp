import React from "react";
import "./BoxPattern.css";

function BoxNewProjectStaffing(props) {
    return (
        <div
        className="box"
        style={{
          position: "relative",
          height: '140px',
          width: '402px',
          bottom: props.top,
          marginTop: props.marginTop,
          left: props.margin,
          justifyContent: "center",
        }}
      >
        <label htmlFor="employee">Employé :</label>
        <input type="text" id="employee" name="employee" placeholder="Saisissez le nom de l'employé..."/>
      </div>
    );
}

export default BoxNewProjectStaffing;
