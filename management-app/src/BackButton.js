import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./BackButton.css"


function BackButton() {
        return (
            <div>
                <button class="back-button">
  <span class="arrow"></span>
  Back
</button>

            </div>
        );
    }



BackButton.propTypes = {

};


export default BackButton;
