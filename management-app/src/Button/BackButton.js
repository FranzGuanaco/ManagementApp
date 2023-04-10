import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./BackButton.css"


function BackButton(props) {
        return (
            <div>
                <button class="arrow-btn" onClick={props.onClickBack}>
                    Back 
                <span class="arrow"></span></button>

            </div>
        );
    }



BackButton.propTypes = {
    onClickBack: PropTypes.func.isRequired
};


export default BackButton;
