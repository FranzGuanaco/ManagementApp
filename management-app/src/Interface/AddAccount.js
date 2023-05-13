import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AlignMenu from '../Menu/AlignMenu';
import ParamPic from './ParamPic';
import Form from '../Form/Form';
import BackButton from '../Button/BackButton';
import Pic from '../Picture/Pic';

function AddAccount() {
    const [Firstname, setFirstname] = useState('');
    const [Surname, setSurname] = useState('');
    const [Position, setPosition] = useState('');
    const [age, setAge] = useState('');
    const [Diploma, setDiploma] = useState('');
    const [Cost, setCost] = useState('');
    const [Mail, setMail] = useState('');

const handleFormSubmit = (event) => {
    console.log('handleFormSubmit called'); 
    console.log('Firstname:', Firstname);
    console.log('Surname:', Surname);
    console.log('Position:', Position);
    // etc.

    event.preventDefault();
  
    const newEmployee = {
      Position: Position,
      Firstname: Firstname,
      Surname: Surname,
      Mail: Mail,
      Cost: Cost,
      age: age,
      Diploma: Diploma,
    };
  
    axios
    .post('http://localhost:3001/AddAccount', newEmployee)
    .then((response) => {
      console.log('Données insérées avec succès');
      console.log(response.data); // Affichez la réponse de l'API
      // Réinitialiser les champs du formulaire
      setFirstname('');
      setSurname('');
      setPosition('');
      setAge('');
      setDiploma('');
      setCost('');
      setMail('');
    })
    .catch((error) => {
      console.log('Erreur lors de l\'insertion des données');
      console.log(Firstname)
      console.error(error);
    });
};

  return (
    <div className="home">
      <AlignMenu
        bottom="44px"
        buttonText="Home"
        links="/Homepage"
        buttonText1="Edit"
        links1="/EditAccount"
        buttonText2="Staffing"
        links2="/"
        buttonText3="Calendar"
        links3="/"
        buttonText4="Employee"
        links4="/"
        buttonText5="Vacancy"
        links5="/"
        buttonText6="Mail"
        links6="/"
      />

      <div className="menu-left">
        <Link to="/Parameters">
          <ParamPic />
        </Link>
      </div>

      <div className="container">
          <>
            <div className="randombox-container">
              <Form size="75px" width="230px" radius="18px" 
              text = 'firstname'
              value={Firstname}
              onChange={(event) => 
                setFirstname(event.target.value)}
              />

              <div style={{ marginLeft: '40px' }}>
                <Form size="75px" width="230px" radius="18px"  
                text = 'Surname'
                value={Surname}
                onChange = {(event) => setSurname(event.target.value)}
                />
              </div>
            </div>

            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="500px" radius="22px"  
              text = 'age'
              value={age}
              onChange = {(event) => setAge(event.target.value)}
              />
            </div>
            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="500px" radius="22px" 
              text = 'position'
              value={Position}
              onChange = {(event) => setPosition(event.target.value)}
              />
            </div>

            <div className="randombox-container">
              <div style={{ marginTop: '10px' }}>
                <Form size="75px" width="500px" radius="22px" 
                text = 'diploma'
                value={Diploma}
                onChange = {(event) => setDiploma(event.target.value)}
                />
              </div>
              <div style={{ marginLeft: '50px', marginTop: '10px' }}>
                <Form size="75px" width="500px" radius="22px"  
                text = 'cost'
                value={Cost}
                onChange = {(event) => setCost(event.target.value)}/>
              </div>
            </div>

            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="1070px" radius="22px" 
              text = 'Mail'
              value={Mail}
              onChange = {(event) => setMail(event.target.value)}/>
            </div>
            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="1070px" radius="22px" />
            </div>
            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="1070px" radius="22px"  />
            </div>

            <div style={{ marginTop: '20px' }}>
              <BackButton onClickBack={handleFormSubmit} style={{ margin: 'auto' }} />
            </div>

            <div className="pic">
              <div style={{ bottom: '20px', marginLeft: '50%' }}>
                <Pic />
                <Form size="30px" width="100px" radius="22px" />
              </div>
            </div>
          </>
      </div>
    </div>
  );
}

export default AddAccount;
