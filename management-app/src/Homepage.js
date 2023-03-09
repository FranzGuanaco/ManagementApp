import React from 'react'
import "./App.css"
import AlignMenu from './AlignMenu'
import BoxNews from './BoxNews'
import Pic from './Pic'
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    
    <div className="home">
        <AlignMenu
        bottom= "40px"
        buttonText = "Employees"
        links ="/Employee"

        buttonText1 = "Project"
        buttonText2 = "Staffing"
        buttonText3 = "Calendar"
        buttonText4 = "Finance"
        buttonText5 = "Vacancy"
        buttonText6 = "Mail"
        />
        <div className="center">
            <BoxNews 
            top = "220px"/>
        

        <Link to="/Employee">
      <button>Aller à la page suivante</button>
    </Link>
       
        </div>
    </div>


  )
}
