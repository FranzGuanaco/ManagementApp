import React from 'react';
import RandomBox from '../RandomBox';
import AlignMenu from '../Menu/AlignMenu';
import Pie from '../PieChart';
import "../App.css";

function Track () {

    return (

        <div className="track">

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