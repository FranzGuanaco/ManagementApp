import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
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
      projects: [],
      employees: [],
      staffing: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/Staffing')
      .then((response) => {
        console.log('reussi');
        const { result1, result2, result3 } = response.data;
        this.setState({ projects: result1, employees: result2, staffing: result3});;
      
      })
      .catch((error) => {
        console.log('raté');
      });
  }

  switchProject = (e) => {
    console.log(this.state.project);
  };

  render() {
    const { projects } = this.state;
    const { employees } = this.state;
    const { staffing } = this.state;

    return (
      <div className="staffing">
        <div className='menu-right'>
          <AlignMenuShorter
            bottom="40px"
            buttonText="Homepage"
            links="/Homepage"
            buttonText1="Project"
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

          <BoxStaffing 
          projectName={projects.map(project => project.project_name)}/>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30%' }}>
          <div style={{ marginRight: '10%' }}>
            <OptionBtn btntext="er" />
          </div>
          <div style={{ marginRight: '10%' }}>
            <OptionBtn btntext="experience" />
          </div>
          <div style={{ marginRight: '5%' }}>
            <OptionBtn />
          </div>
        </div>

        <div style={{ marginTop: '2%', marginLeft: "30%" }}>
          <RandomBox size="150px" width={'73%'} radius={'22px'} 
          data={employees.map(employee => employee.Firstname)}
          click={staffing}
          />
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
