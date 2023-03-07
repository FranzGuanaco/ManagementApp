import React from "react";
import "./App.css";
import Pic from "./Pic";

function BoxNews(props) {

  

    return (
        <div className="boxNews"
        style={{
            position: "relative",
            bottom: props.top,
            left: props.margin,
            justifyContent: "center",
          }}>
            <Pic
            margin= "150px"
            left = "20px"
            />
            
        </div>
        
   
);
}



export default BoxNews