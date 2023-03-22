import React from 'react'
import AlignMenu from './Menu/AlignMenu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

      
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


const CircularButton = () => (
    <button className="circular-button">
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );


class NewProject extends React.Component {

    render(){        

        return(
            
            <CircularButton/>

        )
    }
}

export default NewProject;