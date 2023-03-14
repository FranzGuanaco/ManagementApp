import React from 'react';
import RandomBox from './RandomBox';
import AlignMenu from './AlignMenu';
import BackButton from './BackButton';
import Pic from './Pic';
import "./App.css";

function ViewAccount () {

        return (

            <div className="home">
        <AlignMenu
        bottom= "44px"
        buttonText = "Employees"
        links ="/Employee"

        buttonText1 = "Home"
        buttonText2 = "Edit"
        buttonText3 = "Staffing"
        buttonText4 = "Calendar"
        buttonText5 = "Employee"
        buttonText6 = "Vacancy"
        buttonText7 = "Mail"
        
        />
        
        <div className="container">
  <div className="randombox-container">
    <RandomBox size="75px" width={'230px'} radius={'18px'} />
    <div style={{marginLeft: '40px'}}>
      <RandomBox size="75px" width={'230px'} radius={'18px'} />
    </div>
  </div>
  <div style={{marginTop:'10px'}}>
    <RandomBox size="75px" width={'500px'} radius={'22px'} />
  </div>
  <div style={{marginTop:'10px'}}>
    <RandomBox size="75px" width={'500px'} radius={'22px'} />
  </div>
  <div className="randombox-container">
  <div style={{marginTop:'10px'}}>
    <RandomBox size="75px" width={'500px'} radius={'22px'} />
    </div>
    <div style={{marginLeft: '50px', marginTop:'10px'}}>
    <RandomBox size="75px" width={'500px'} radius={'22px'} />
    </div>
  </div>
  <div style={{marginTop:'10px'}}>
    <RandomBox size="75px" width={'1070px'} radius={'22px'} />
  </div>
  <div style={{marginTop:'10px'}}>
    <RandomBox size="75px" width={'1070px'} radius={'22px'} />
  </div>
  <div style={{marginTop:'10px'}}>
    <RandomBox size="75px" width={'1070px'} radius={'22px'} />
  </div>
    </div>
    <div style={{marginTop:'20px'}}>
    <BackButton/>
    </div>

    <div className="randombox-container">
    <div style={{bottom: '50px', marginLeft: '1100px' }}>
    <Pic/>
    <RandomBox size="30px" width={'100px'} radius={'22px'} />
      </div>
      </div>
    </div>

    

        );
    }


export default ViewAccount;
