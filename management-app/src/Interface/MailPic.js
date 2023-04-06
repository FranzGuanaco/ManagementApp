import React from 'react';
import MailPicture from "../email.png"



const MailPic = (props) => {
    return (

    <div className='MailSent'>
    <img src={MailPicture} alt="Email Icon" className="EmailIcon"/>
    </div>
)
};

export default MailPic