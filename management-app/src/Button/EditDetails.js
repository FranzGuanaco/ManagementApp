import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./EditDetailsButton.css"

function Editdetails(props) {
    return (
        <div>
            <button onClick={props.onClick} className="edit-btn">
                Edit
            </button>
        </div>
    );
}

Editdetails.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Editdetails;
