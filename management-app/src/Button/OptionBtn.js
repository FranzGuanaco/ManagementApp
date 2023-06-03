import React from "react";

const OptionBtn = (props) => {

  

    return (
        
        <button class="btn" style={{
            backgroundColor: 'blue',
            borderRadius: '20px',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            width: '215px',
            height: '40px'
          }}>{props.btntext}</button>

);
}


export default OptionBtn