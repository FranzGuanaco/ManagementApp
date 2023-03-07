import React from 'react';
import './App.css';

const Pic = (props) => {
  return (

  <div class="circle-image"
  
    style= {{
    bottom: props.margin,
    marginLeft: props.left,
    position: "absolute"

  }}>

  <img src="photo.jpg" alt="Photo" />
</div>

  )
};


export default Pic;
