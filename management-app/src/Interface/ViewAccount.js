import React from 'react';
import RandomBox from '../RandomBox';
import AlignMenu from '../Menu/AlignMenu';
import RandomButton from '../Button/RandomButton';
import ParamPic from './ParamPic';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pic from '../Picture/Pic';
import axios from 'axios';
import "../App.css";

function ViewAccount() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/EmployeeDetails")
      .then((response) => {
        console.log('reussi')
        setEmployees(response.data)
      })
      .catch((error) => {
        console.log('raté')
      });
  }, []);

  const [remove, setRemove] = useState(false);

  const deleteAccount = () => {
    console.log('Compte supprimé');
    setRemove(true);
  };

  const closeAccount = () => {
    setRemove(false);
  };

  const editAccount = () => {
    window.location.href = '/EditAccount';
  };

  return (
    <div className="home" style={{ textAlign: 'center' }}>
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
          <React.Fragment key={employee.id}>
            <div className="randombox-container">
              <RandomBox size="75px" width={'200px'} radius={'18px'} data={employee.Firstname} />
              <div style={{ marginLeft: '40px' }}>
                <RandomBox size="75px" width={'230px'} radius={'18px'} data={employee.Firstname} />
              </div>
            </div>
          
            <div style={{ marginTop: '10px' }}>
              <RandomBox size="75px" width={'500px'} radius={'22px'} data={employee.Position} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <RandomBox size="75px" width={'500px'} radius={'22px'} data={employee.Surname} />
            </div>
            <div className="randombox-container">
              <div style={{ marginTop: '10px' }}>
                <RandomBox size="75px" width={'500px'} radius={'22px'} data={employee.Surname} />
              </div>
              <div style={{ marginLeft: '50px', marginTop: '10px' }}>
                <RandomBox size="75px" width={'500px'} radius={'22px'} data={employee.Surname} />
              </div>
            </div>
            <div style={{ marginTop: '10px' }}>
              <RandomBox size="75px" width={'1070px'} radius={'22px'} data={employee.Surname} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <RandomBox size="75px" width={'1070px'} radius={'22px'} data={employee.Surname} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <RandomBox size="75px" width={'1070px'} radius={'22px'} data={employee.Surname} />
            </div>
          </React.Fragment>
        ))}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '60px' }}>
            <RandomButton onClick={editAccount} colorbgnd="#9a9a9a" />
          </div>
          <RandomButton onClick={deleteAccount} colorbgnd="red" text="Delete" style={{ marginLeft: '60px' }} />
        </div>
        <div className="pic">
          <div style={{ bottom: '20px', marginLeft: '50%' }}>
            <Pic />
            <RandomBox size="30px" width={'100px'} radius={'22px'} />
          </div>
        </div>
      </div>

      {remove && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeAccount}>
              &times;
            </span>
            <button>Valider</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ViewAccount;



