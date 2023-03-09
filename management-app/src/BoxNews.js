import React from "react";
import "./App.css";
import Pic from "./Pic";

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
              margin = "30%"
              left = "2%"
            />
            
        </div>
        
   
);
}



export default BoxNews