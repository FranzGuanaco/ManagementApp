import React from 'react'
import "./App.css";
import PropTypes  from 'react';

 const Button = (props) => {
  return (
    
    <button 
    className="button"
    onClick={props.onClick}>
        {props.texte}

    </button>
  );
}

Button.defaultProps = {
    texte: 'click',
    
  }

export default Button
