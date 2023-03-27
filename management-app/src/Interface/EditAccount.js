import React from 'react';
import AlignMenu from '../Menu/AlignMenu';
import BackButton from '../Button/BackButton'
import Form from '../Form/Form';
import Pic from '../Picture/Pic';
import "../App.css";

function EditAccount () {

    return (

        <div className="home">

    <AlignMenu
       bottom= "44px"

       buttonText = "Home"
       links ="/Homepage"

       buttonText1 = "Edit"
       links1 ="/EditAccount"

       buttonText2 = "Staffing"
       links2 ="/"

       buttonText3 = "Calendar"
       links3 ="/"

       buttonText4 = "Employee"
       links4 ="/"

       buttonText5 = "Vacancy"
       links5 ="/"

       buttonText6 = "Mail"
       links6 ="/"
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