import React from 'react'
import "./App.css"
import AlignMenu from './AlignMenu'
import BoxNews from './BoxNews'
import Pic from './Pic'

export default function Homepage() {
  return (
    
    <div className="home">
        <AlignMenu
        bottom= "40px"
        />
        <div className="center">
            <BoxNews 
            top = "220px"/>
        </div>
       
    </div>


  )
}
