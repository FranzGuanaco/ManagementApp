import React, { Component } from 'react';
import AlignMenu from '../Menu/AlignMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Square from '../Box/SquareData';
import Pic from '../Picture/Pic';
import BoxNewProjectStaffing from '../Box/BoxNewProjectStaffing';
import axios from "axios";
import "../App.css";

const Menu = () => (
  <div className="home">
    <AlignMenu
      bottom="40px"
      buttonText="Employees"
      links="/Employee"
      buttonText1="Project"
      buttonText2="Staffing"
      buttonText3="Calendar"
      buttonText4="Finance"
      buttonText5="Vacancy"
      buttonText6="Mail"
    />
  </div>
)

const CircularButtonRight = ({ onClick }) => (
  <button className="circular-button" onClick={onClick}>
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
);

const CircularButtonLeft = ({ onClick }) => (
  <button className="circular-button" onClick={onClick}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>
);

class NewProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newProject: [],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/NewProject')
      .then((response) => {
        this.setState({ newProject: response.data.data });
        console.log('Les noms de projet sont :', response.data.data);
      })
      .catch((error) => {
        console.log('Erreur :', error);
      });
  }

  handleNext = () => {
    const { currentIndex, newProject } = this.state;
    if (currentIndex < newProject.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  handlePrevious = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  render() {
    const { newProject, currentIndex } = this.state;
    const currentProject = newProject[currentIndex];

    return (
      <div className='Menu'>
        <Menu />
        <div className="ArrowButton" style={{ marginTop: '1%', display: "flex", alignItems: "center" }}>
          <div className='ArrowButtonRight' style={{ marginLeft: '20%' }}>
            <CircularButtonLeft onClick={this.handlePrevious} />
          </div>
          <div className='ArrowButtonRight' style={{ marginLeft: '10%' }}>
            <Square text={currentProject && currentProject.project_name} />
          </div>
          <div className='ArrowButtonRight2' style={{ marginLeft: '10%' }}>
            <CircularButtonRight onClick={this.handleNext} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginLeft: '3%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ margin: '0 5%' }}>
              <Pic />
            </div>
            <div style={{ margin: '0 3%' }}>
              <Pic />
            </div>
            <div style={{ margin: '0 3%' }}>
            <Pic />
          </div>
          <div style={{ margin: '0 3%' }}>
            <BoxNewProjectStaffing />
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default NewProject;


