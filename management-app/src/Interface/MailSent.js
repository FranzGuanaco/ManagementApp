import React from 'react';
import MailPic from './MailPic';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';



export default function MailSent() {
    const [count, setCount] = useState(10);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (count > 0) {
        setTimeout(() => {
            setCount(count - 1)
        }, 1000);
    }
    else {
        //redirect
        setRedirect(true)
    }
    });
    
    if (redirect) {
        return <Navigate to="/Homepage" />;
      }

    return (

    <div className='MailSent'>
    <MailPic/>
    <h1>Envoie du mail</h1>
    <h5> Vous allez etre redirigé à la page d'accueil dans {count} sec</h5>
    </div>
)
};




