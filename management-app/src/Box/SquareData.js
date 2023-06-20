import React from "react";
import "./DataSquare.css";

const Square = (props) => {
  return (
    <div
      style={{
        width: '900px',
        height: '500px',
        backgroundColor: '#ccc',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default Square;
