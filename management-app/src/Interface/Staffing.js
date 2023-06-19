import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../StaffingStyle.css";
import BoxStaffing from '../Box/BoxStaffing';
import OptionBtn from '../Button/OptionBtn';
import AlignMenuShorter from '../Menu/AlignMenuShorter';
import RandomBox from '../RandomBox';

class Staffing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      projects: [],
    };
  }

  NewStaffing = (employeeId, projectId) => {
    if (projectId === undefined) {
      projectId = this.state.projects[0].id;
    }
    axios.post('http://localhost:3001/NewStaffing', { employeeId, projectId })
      .then((response) => {
        console.log(`La valeur de employeeId est  ${employeeId} et projectId est ${projectId}`);
        this.setState({ employeeId: employeeId, projectId: projectId });
      })
      .catch((error) => {
        console.log('Erreur :', error);
      });
  }


  handleSlideChange = (slideIndex) => {
    this.setState({ projectId: slideIndex });
    console.log('Ca marche :', slideIndex);
  };
  

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

  render() {
    const { employees, projects } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

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
          
         
          <Slider {...settings} afterChange={(slideIndex) => this.handleSlideChange(projects[slideIndex].id)}>
             
          {projects.map((project) => (
            // Box staffing comportant les données de chaque projet
              <BoxStaffing key={project.id} projectName={project.project_name} />

            ))}
          </Slider>
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

          {
            // Box employee avec le boutton censé staffé l'employé en question
            // map pour faire defiler tous les employés
            employees.map((employee) => (
              <RandomBox
                key={employee.id}
                size="150px"
                width={'73%'}
                radius={'22px'}
                data={`${employee.Firstname} ${employee.Surname}`}
                // il faut aussi inclure la data du projet
                click={() => this.NewStaffing(employee.id, this.state.projectId)}
              /> 
          ))}
        </div>
      </div>
    );
  }
}

export default Staffing


