import React from 'react';
import PropTypes from 'prop-types';


const RandomBox = (props) => {
    
    return (
            <div
            style = {{ 
                border: '1px solid #adabab',
                borderRadius: props.radius,
                width: '300px',
                height: '150px',
                marginBottom: '30px'
            }}
                >
            </div>
        );
    }


RandomBox.propTypes = {

    radius: '20px',
    width: '300px',
    height: '150px'

};


export default RandomBox;
