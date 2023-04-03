import React, { Component } from 'react';
import "../StaffingStyle.css";
import BoxStaffing from '../Box/BoxStaffing';
import OptionBtn from '../Button/OptionBtn';
import AlignMenuShorter from '../Menu/AlignMenuShorter';
import RandomBox from '../RandomBox';

class Staffing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: "switch",
    };
  }

  switchProject = (e) => {
    
    console.log(this.state.project);

  };

  render() {
    return (
      <div className="staffing">
        <div className='menu-right'>
          <AlignMenuShorter
            bottom="40px"
            buttonText="Project"
            links="/"
            buttonText1="Staffing"
            links1="/"
            buttonText2="Calendar"
            links2="/"
            buttonText3="Finance"
            links3="/"
            buttonText4="Vacancy"
            links4="/"
            buttonText5="Mail"
            links5="/"
          />
        </div>

        <div className='containerStaff' style={{ marginLeft: "30%" }}>
          <div className="circle-arrow" onClick={this.switchProject}>
            <div className="arrow"></div>
          </div>
        </div>

        <BoxStaffing />

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30%' }}>
          <div style={{ marginRight: '10%' }}>
            <OptionBtn />
          </div>
          <div style={{ marginRight: '10%' }}>
            <OptionBtn />
          </div>
          <div style={{ marginRight: '5%' }}>
            <OptionBtn />
          </div>
        </div>

        <div style={{ marginTop: '2%', marginLeft: "30%" }}>
          <RandomBox size="150px" width={'73%'} radius={'22px'} />
        </div>

        <div style={{ marginTop: '10px', marginLeft: "30%" }}>
          <RandomBox size="150px" width={'73%'} radius={'22px'} />
        </div>

        <div style={{ marginTop: '10px', marginLeft: "30%" }}>
          <RandomBox size="150px" width={'73%'} radius={'22px'} />
        </div>

        <div style={{ marginTop: '10px', marginLeft: "30%" }}>
          <RandomBox size="150px" width={'73%'} radius={'22px'} />
        </div>
      </div>
    );
  }
}

export default Staffing;

