import React from 'react'
import "../App.css"
import AlignMenuShorter from '../Menu/AlignMenuShorter';
import BoxNews from '../Box/BoxNews'
import { Link } from "react-router-dom";
import ParamPic from './ParamPic';

export default function Homepage() {
  return (
    
    <div className="home">
    <div className="menu-container">
      
        <div className='menu-right'>
        <AlignMenuShorter
        bottom= "40px"
      
        buttonText = "Project"
        links = "/"

        buttonText1 = "Staffing"
        links1 = "/"

        buttonText2 = "Calendar"
        links2 = "/"

        buttonText3 = "Finance"
        links3 = "/"

        buttonText4 = "Vacancy"
        links4 = "/"

        buttonText5 = "Mail"
        links5 = "/"
        />

        </div>
        <div className='menu-left'>
          <ParamPic/>
        </div>
        </div>

        <div className="center">
        <BoxNews top = "220px"/>
        </div>
          </div>

  )
}

