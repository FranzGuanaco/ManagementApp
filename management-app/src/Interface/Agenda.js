import React, { Component } from 'react';
import Calendar from './Calendar';
import AlignMenu from '../Menu/AlignMenu';

class Agenda extends Component {
  render() {
    return (
      <div className="home">
      <AlignMenu
        bottom="44px"
        buttonText="Home"
        links="/Homepage"
        buttonText1="Edit"
        links1="/EditAccount"
        buttonText2="Staffing"
        links2="/"
        buttonText3="Calendar"
        links3="/"
        buttonText4="Employee"
        links4="/"
        buttonText5="Vacancy"
        links5="/"
        buttonText6="Mail"
        links6="/"
      />
    <div style={{marginLeft: '25%'}}>
        <Calendar />
        </div>
      </div>
    );
  }
}

export default Agenda;

