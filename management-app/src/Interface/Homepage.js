import React from 'react'
import AlignMenuShorter from '../Menu/AlignMenuShorter';
import BoxNews from '../Box/BoxNews'
import BoxEmployee from '../Box/BoxEmployee'
import { Link } from "react-router-dom";
import ParamPic from './ParamPic';
import "../App.css"

export default function Homepage() {
  return (
    
    <div className="home">
      
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

        <div className="center">
            <Link to='/Employee details'>
            <BoxEmployee top = "5%"/>

            </Link>
            <Link to='/Employee details'>
             <BoxNews marginTop = "2%"/>
             </Link>
        </div>

        <div className='menu-left'>
        <Link to='/Parameters'>
        <ParamPic/>
        </Link>
        </div>
        </div>
        </div>
     


  )
}

