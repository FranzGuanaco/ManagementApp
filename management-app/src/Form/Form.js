import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {  
    return (
        <div className='FormStyle'>
            <input 
                style={{
                    padding: '12px 20px',
                    margin: '8px 0px',
                    borderRadius: props.radius,
                    width: props.width,
                    height: props.size,
                    boxSizing: 'border-box'
                }} 
                type="text" 
                id="fname" 
                name="firstname" 
                placeholder={props.text}
                value={props.value}  // Ajout de la prop value
                onChange={props.onChange}  // Ajout de la prop onChange
            />
        </div>
    );
}

Form.propTypes = {
    radius: PropTypes.string,
    width: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,  // Ajout de la prop value à PropTypes
    onChange: PropTypes.func,  // Ajout de la prop onChange à PropTypes
};

Form.defaultProps = {
    radius: '20px',
    width: '300px',
    text: 'Data',
};

export default Form;




  
      

