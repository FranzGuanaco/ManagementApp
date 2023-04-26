import React from 'react';
import "./TextDataEmployeeStyle.css"


const TextDataEmployee = (props) => {
    return (
        <div class="containerTextData" style={{ width: props.width, height: props.height, padding: props.padding, 
        marginLeft: props.left}}>
      <p>{props.p}</p>
      <p>{props.poste}</p>
      <p>{props.contact}</p>
      <p>{props.disponibilité}</p>
      <p>{props.cost}</p>
    </div>

)
};

TextDataEmployee.defaultProps = {
    width: "450px",
    height: "250px",
    padding: "30px",
    left: "250px",
    Nom: "Nom, prénom:",
    poste: "poste:",
    contact: "Contact:",
    disponibilité: "Disponibilité:",
    cost: "Cour horaire:"
    
  };



export default TextDataEmployee;