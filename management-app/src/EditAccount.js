import React from 'react';
import RandomBox from './RandomBox';
import AlignMenu from './AlignMenu';
import BackButton from './BackButton';
import Form from './Form';
import Pic from './Pic';
import "./App.css";

function EditAccount () {

    return (

        <div className="home">

    <AlignMenu
    bottom= "44px"
    buttonText = "Employees"
    links ="/Employee"
    buttonText1 = "Home"
    links1 ="/Homepage"
    buttonText2 = "Edit"
    buttonText3 = "Staffing"
    buttonText4 = "Calendar"
    buttonText5 = "Employee"
    buttonText6 = "Vacancy"
    buttonText7 = "Mail"
    />
    
    <div className="container">
    <div className="randombox-container">
    <Form size="75px" width={'230px'} radius={'18px'} />
    <div style={{marginLeft: '40px'}}>
    <Form size="75px" width={'230px'} radius={'18px'} />
    </div>
    </div>

    <div style={{marginTop:'10px', marginRight:'1000px'}}>
    <Form size="75px" width={'500px'} radius={'22px'} text='ooo'/>
    </div>
    <div style={{marginTop:'10px', marginRight:'1000px'}}>
    <Form size="75px" width={'500px'} radius={'22px'} text='ooo'/>
    </div>

    <div className="randombox-container">
    <div style={{marginTop:'10px'}}>
    <Form size="75px" width={'500px'} radius={'22px'} />
    </div>
    <div style={{marginLeft: '50px', marginTop:'10px'}}>
    <Form size="75px" width={'500px'} radius={'22px'} />
    </div>
    </div>

    <div style={{marginTop:'10px', marginRight:'1000px'}}>
    <Form size="75px" width={'1070px'} radius={'22px'} text='ooo'/>
    </div>
    <div style={{marginTop:'10px', marginRight:'1000px'}}>
    <Form size="75px" width={'1070px'} radius={'22px'} text='ooo'/>
    </div>
    <div style={{marginTop:'10px', marginRight:'1000px'}}>
    <Form size="75px" width={'1070px'} radius={'22px'} text='ooo'/>
    </div>

    <div style={{marginTop:'20px'}}>
    <BackButton/>
    </div>

    <div className="pic">
    <div style={{bottom: '20px', marginLeft: '50%' }}>
    <Pic/>
    <Form size="30px" width={'100px'} radius={'22px'} />
    </div>
      </div>
        </div>
        </div>



    );
}


export default EditAccount;