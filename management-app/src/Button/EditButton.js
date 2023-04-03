import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Menu/AlignMenu';
import "../Style/Button.css"
import "../Style/Menu.css"

const EditButton = (props) => {
    return (
      
        <Button
            width={props.width}
            height={props.height}
            minWidth={props.minWidth} />
      
    );
  }
  
  
  
  
  
  export default EditButton