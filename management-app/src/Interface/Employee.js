import React from 'react'
import AlignMenu from '../Menu/AlignMenu'
import BoxNews from '../Box/BoxNews'
import ParamPic from './ParamPic'
import "../App.css"
import { Link } from 'react-router-dom'

export default function Employee() {
     return (

        <div className="home">
            <AlignMenu bottom= "40px"

                buttonText = "Home"
                links ="/Homepage"

                buttonText1 = "Project"
                links1 ="/"

                buttonText2 = "Staffing"
                links2 ="/"

                buttonText3 = "Calendar"
                links3 ="/"

                buttonText4 = "Finance"
                links4 ="/"

                buttonText5 = "Vacancy"
                links5 ="/"

                buttonText6 = "Mail"
                links6 ="/"
            
            />

        <div className="center">
            <Link to='/Employee details'>
            <BoxNews top = "5%"/>
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

    )
    }