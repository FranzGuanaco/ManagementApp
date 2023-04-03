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
            left: props.margin,
            justifyContent: "center",
          }}>

            <Pic
              marginTop = "2%"
              marginLeft = "4%"
            />

            <EditButton width="15%" height="10%" minWidth="2px"/>
            
        </div>
        
   
);
}



export default BoxNews