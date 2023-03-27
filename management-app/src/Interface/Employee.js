import React from 'react'
import AlignMenu from '../Menu/AlignMenu'
import BoxNews from '../Box/BoxNews'
import "../App.css"

export default function Employee() {
     return (

        <div className="home">
        <AlignMenu
        bottom= "40px"
        />
        <div className="center">
            <BoxNews 
            top = "100px"/>

            <BoxNews 
            top = "100px"/>
    
        </div>
    </div>

    )
    }