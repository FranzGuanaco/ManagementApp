import React from 'react';
import propTypes from 'prop-types';

const RandomBox = (props) => {
    return (
        <div className='Box'
            style={{
                border: '1px solid #adabab',
                borderRadius: props.radius,
                width: props.width,
                height: props.size,
                marginBottom: '14px',
            }}
        >
            <p>{props.data}</p>
            <button style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px' }} onClick={props.click} id={props.id}>
                Bouton
            </button>
        </div>
    );
};

RandomBox.propTypes = {
    radius: propTypes.string,
    width: propTypes.string,
    size: propTypes.string,
    data: propTypes.string
};

RandomBox.defaultProps = {
    radius: '20px',
    width: '300px',
    size: '220px',
    data: '',
    id: 'test'
};

export default RandomBox;

