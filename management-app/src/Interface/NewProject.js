import React from 'react';
import AlignMenu from '../Menu/AlignMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Square from '../Box/SquareData';
import Pic from '../Picture/Pic';
import BoxNewProjectStaffing from '../Box/BoxNewProjectStaffing';
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


const CircularButtonRight = () => (
  <button className="circular-button">
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
);

const CircularButtonLeft = () => (
  <button className="circular-button">
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>
);


class NewProject extends React.Component {

  render() {

    return (
      <div className='Menu'>
        <Menu />
        <div className="ArrowButton" style={{ marginTop: '1%', display: "flex", alignItems: "center" }}>
          <div className='ArrowButtonRight' style={{ marginLeft: '20%' }}>
            <CircularButtonLeft />
          </div>
          <div className='ArrowButtonRight' style={{ marginLeft: '10%' }}>
            <Square />
          </div>
          <div className='ArrowButtonRight2' style={{ marginLeft: '10%' }}>
            <CircularButtonRight />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginLeft: '3%'  }}>
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

    )
  }
}

export default NewProject;


