import React from 'react';
import './Pic.css';

const Pic = (props) => {
  return (

  <div class="circle-image"
    style={{
      marginLeft: props.marginLeft,
      marginTop: props.marginTop
    }}
  >

  <img src="photo.jpg" alt="Photo" />
</div>

  )
};


export default Pic;
