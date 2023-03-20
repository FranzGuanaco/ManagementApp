import React from 'react';
import propTypes from 'prop-types';


const RandomBox = (props) => {
    
    return (
            <div className='Box'
            style = {{ 
                border: '1px solid #adabab',
                borderRadius: props.radius,
                width: props.width,
                height: props.size,
                marginBottom: '14px'
            }}
                >
                    test
            </div>
        );
    }


RandomBox.propTypes = {

    radius: '20px',
    width: '300px',
    size: '220px'

};


export default RandomBox;
