import React from "react";
import "./BxNews.css";
import Pic from "../Picture/Pic";

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
            
        </div>
        
   
);
}



export default BoxNews