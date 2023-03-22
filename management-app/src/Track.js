import React from 'react';
import RandomBox from './RandomBox';
import AlignMenu from './Menu/AlignMenu';
import Pie from './PieChart';
import "./App.css";

function Track () {

    return (

        <div className="track">

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


     
        <div className="randombox-pie">
        <Pie/>
        <Pie/>
        </div>
      
       

        <div className="container_track">
        <div style={{marginTop:'8px'}}>
        <RandomBox size="95px" width={'1200px'} radius={'22px'} />
        </div>
        <div style={{marginTop:'8px'}}>
        <RandomBox size="95px" width={'1200px'} radius={'22px'} />
        </div>
        <div style={{marginTop:'8px'}}>
        <RandomBox size="95px" width={'1200px'} radius={'22px'} />
        </div>
        <div style={{marginTop:'8px'}}>
        <RandomBox size="95px" width={'1200px'} radius={'22px'} />
        </div>
        <div style={{marginTop:'8px'}}>
        <RandomBox size="95px" width={'1200px'} radius={'22px'} />
        </div>
        <div style={{marginTop:'8px'}}>
        <RandomBox size="95px" width={'1200px'} radius={'22px'} />
        </div>
        </div>


        </div>


    );
}


export default Track;