import React from 'react'
import "../Box/BoxPattern.css";

export default function BoxStaffing(props) {
  return (
    
    <div className="staffing-container"
        
    >


        <div className="box"
        style={{
            position: "relative",
            bottom: props.top,
            left: props.margin,
            justifyContent: "center",
            marginTop: "2%"
          }}>
           
            <div class="circleStaff"></div>
            <div class="description">Desciption</div>
            <div class="price">Prix</div>
            <div class="date">Date</div>
            <div class="progressbar">
            <div class="progress"></div>
                </div>
                 </div>
                    </div>
          
        

)
}