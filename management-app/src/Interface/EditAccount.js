import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AlignMenu from '../Menu/AlignMenu';
import ParamPic from './ParamPic';
import Form from '../Form/Form';
import BackButton from '../Button/BackButton';
import Pic from '../Picture/Pic';

function EditAccount() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/EmployeeDetails')
      .then((response) => {
        console.log('reussi');
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log('raté');
      });
  }, []);

  const Backfunc = () => {
    window.location.href = '/Employee details';
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
        {employees.map((employee) => (
          <>
            <div className="randombox-container">
              <Form size="75px" width="230px" radius="18px" text={employee.Firstname} />
              <div style={{ marginLeft: '40px' }}>
                <Form size="75px" width="230px" radius="18px" text={employee.Firstname} />
              </div>
            </div>

            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="500px" radius="22px" text={employee.Firstname} />
            </div>
            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="500px" radius="22px" text={employee.Firstname} />
            </div>

            <div className="randombox-container">
              <div style={{ marginTop: '10px' }}>
                <Form size="75px" width="500px" radius="22px" text={employee.Firstname} />
              </div>
              <div style={{ marginLeft: '50px', marginTop: '10px' }}>
                <Form size="75px" width="500px" radius="22px" text={employee.Firstname} />
              </div>
            </div>

            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="1070px" radius="22px" text={employee.Firstname} />
            </div>
            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="1070px" radius="22px" text={employee.Firstname} />
            </div>
            <div style={{ marginTop: '10px', marginRight: '1000px' }}>
              <Form size="75px" width="1070px" radius="22px" text={employee.Firstname} />
            </div>

            <div style={{ marginTop: '20px' }}>
              <BackButton onClickBack={Backfunc} style={{ margin: 'auto' }} />
            </div>

            <div className="pic">
              <div style={{ bottom: '20px', marginLeft: '50%' }}>
                <Pic />
                <Form size="30px" width="100px" radius="22px" text={employee.Firstname} />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default EditAccount;
