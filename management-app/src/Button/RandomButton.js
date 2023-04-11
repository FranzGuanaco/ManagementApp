import React from 'react';
import PropTypes from 'prop-types';
import "./RandomButton.css"

function RandomButton(props) {
    return (
        <div>
            <button onClick={props.onClick} style={{backgroundColor:props.colorbgnd}} className="edit-btn">
                {props.text}
            </button>
        </div>
    );
}

RandomButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

RandomButton.defaultProps = {
    color: '#9a9a9a',
    text: 'Edit'
};

export default RandomButton;

