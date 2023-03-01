import React from 'react'
import "./App.css"
import AlignMenu from './AlignMenu'
import BoxNews from './BoxNews'

export default function Homepage() {
  return (
    
    <div class="home">
        <AlignMenu/>
        <div className="center">
            <BoxNews />
        </div>
    </div>


  )
}
