import React from 'react';

const Form = (props) => {
    
    return (
            <div className='FormStyle'>
            
        <input style={{
                padding: '12px 20px',
                margin: '8px 0px',
                borderRadius: props.radius,
                width: props.width,
                height: props.size,
                boxSizing: 'border-box'}} 
                type="text" id="fname" name="firstname" placeholder= {props.text}/>

            </div>
        );
    }

    Form.propTypes = {

        radius: '20px',
        width: '300px',
        size: '220px',
        text: 'Data'
    
    };


export default Form;




  
      

