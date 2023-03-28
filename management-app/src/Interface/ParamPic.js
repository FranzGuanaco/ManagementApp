import React from 'react';
import parameterImage from "../parameter.png"
import "./ParamPic.css"


const ParamPic = (props) => {
    return (

<img src={parameterImage} alt="Parameter Icon" className="icon" style={{marginLeft:'80%'}}/>

)
};


export default ParamPic;