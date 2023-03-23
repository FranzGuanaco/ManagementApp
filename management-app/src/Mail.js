import React from 'react';
import RandomBox from './RandomBox';
import AlignMenu from './Menu/AlignMenu';
import OptionBtn from './Button/OptionBtn';
import "./App.css";

function Mail () {

return(

    <div className="Mail">

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


    <div style={{display: 'flex', alignItems: 'center', marginLeft: '55%'}}>
    <div style={{marginRight:'45px'}}>
        <OptionBtn/>
        </div>
        <div style={{marginRight:'45px'}}>
        <OptionBtn/>
        </div>
        </div>
    

<div className="button-container">
    <div style={{marginRight:'45px'}}>
        <OptionBtn/>
        </div>
        <div style={{marginRight:'45px'}}>
        <OptionBtn/>
        </div>
        <div style={{marginRight:'45px'}}>
        <OptionBtn/>
        </div>
        <div style={{marginRight:'5px'}}>
        <OptionBtn/>
        </div>
        </div>

    <div className="container">
   
    <div style={{marginTop:'2%'}}>
        <RandomBox size="150px" width={'1200px'} radius={'22px'} />
        </div>
        <div style={{marginTop:'10px'}}>
        <RandomBox size="150px" width={'1200px'} radius={'22px'} />
        </div>
        <div style={{marginTop:'10px'}}>
        <RandomBox size="150px" width={'1200px'} radius={'22px'} />
        </div>
        <div style={{marginTop:'10px'}}>
        <RandomBox size="150px" width={'1200px'} radius={'22px'} />
        </div>
    </div>
    </div>
    
)

}


export default Mail;