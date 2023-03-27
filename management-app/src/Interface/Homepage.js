import React from 'react'
import "../App.css"
import AlignMenu from '../Menu/AlignMenu'
import BoxNews from '../Box/BoxNews'
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    
    <div className="home">
        <AlignMenu
        bottom= "40px"
        buttonText = "Employees"
        links ="/Employee"

        buttonText1 = "Project"
        links2 = "/"

        buttonText2 = "Staffing"
        links3 = "/"

        buttonText3 = "Calendar"
        links4 = "/"

        buttonText4 = "Finance"
        links5 = "/"

        buttonText5 = "Vacancy"
        links6 = "/"

        buttonText6 = "Mail"
        links7 = "/"
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

