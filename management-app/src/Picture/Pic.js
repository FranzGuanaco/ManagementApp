import React from 'react';
import PropTypes from 'prop-types';
import './Pic.css';

const Pic = (props) => {
  return (
    <div
      className="circle-image"
      style={{
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
        width: props.width,
        height: props.height,
      }}
    >
      <img src="photo.jpg" alt="Photo" />
    </div>
  );
};

Pic.defaultProps = {
  width: '700px',
  height: '70px',
};

Pic.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Pic;

