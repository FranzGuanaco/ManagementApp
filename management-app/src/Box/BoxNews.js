import React from "react";
import "./BoxPattern.css";
import Pic from "../Picture/Pic";
import EditButton from "../Button/EditButton";

function BoxNews(props) {


    return (
        <div className="box"
        style={{
            position: "relative",
            bottom: props.top,
            marginTop: props.marginTop,
            left: props.margin,
            justifyContent: "center",
          }}>

        <div style={{ position: "absolute", top: "15%", left: "4%" }}>
        <Pic />
     </div>

     <div style={{ position: "relative", marginLeft: "70%", top: "10%"  }}>
        <EditButton width="66%" height="100%" minWidth="100px" minHeight="40px"/>
     </div>
        </div>
   
);
}



export default BoxNews