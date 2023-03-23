import React from "react";
import "./DataSquare.css";

const Square = (props) => {

    return (
        
        <div style={{
            width: '900px', /* Ajustez la largeur selon vos besoins */
            height: '500px', /* Ajustez la hauteur selon vos besoins */
            backgroundColor: '#ccc',/* Couleur de fond du carré */
            textAlign: 'center', /* Pour centrer le texte horizontalement */
            display: 'flex', /* Pour centrer le texte verticalement */
            justifyContent: 'center', /* Pour centrer le texte verticalement */
            alignItems: 'center', /* Pour centrer le texte verticalement */
          }} >
        <p>Contenu de mon carré</p>
        </div>

);
}
export default Square;