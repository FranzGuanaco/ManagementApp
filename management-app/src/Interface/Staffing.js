import React, { Component } from 'react';
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
      employees: [],  // Ajout de l'initialisation du state
      projects: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/Staffing')
      .then((response) => {
        console.log('Réussi');
        const { employees, projects } = response.data;
        this.setState({ employees, projects });
      })
      .catch((error) => {
        console.log('Erreur :', error);
      });
  }
  

  switchProject = (e) => {
    console.log(this.state.result);
  };

  render() {
    const { employees, projects } = this.state;

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
          {projects.map((project) => (
          <BoxStaffing  projectName={project.project_name}/>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30%' }}>
          <div style={{ marginRight: '10%' }}>
            <OptionBtn btntext="Staffé" />
          </div>
          <div style={{ marginRight: '10%' }}>
            <OptionBtn btntext="Non staffé" />
          </div>
          <div style={{ marginRight: '5%' }}>
            <OptionBtn />
          </div>
        </div>

        <div style={{ marginTop: '2%', marginLeft: "30%" }}>
          {employees.map((employee) => (
            <RandomBox
              key={employee.id}
              size="150px"
              width={'73%'}
              radius={'22px'}
              data={`${employee.Firstname} ${employee.Surname}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Staffing;


