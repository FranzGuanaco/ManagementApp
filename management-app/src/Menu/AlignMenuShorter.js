import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "../Style/Button.css"
import "../Style/Menu.css"


function AlignMenuShorter(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
    <span
        style={{ fontSize: '30px', cursor: 'pointer', display: 'block', margin: '30px', marginTop: '50px', width: '10%' }}
        onClick={openNav}
        
      >
        &#9776; 
      </span>
      <div id="mySidenav" className={`sidenav ${isNavOpen ? 'open' : ''}`}>
      
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div class="align">
        <Button texte ={props.buttonText} link ={props.links}/>
        <Button texte ={props.buttonText1} link ={props.links1}/>
        <Button texte ={props.buttonText2} link ={props.links2}/>
        <Button texte ={props.buttonText3} link ={props.links3}/>
        <Button texte ={props.buttonText4} link ={props.links4}/>
        <Button texte ={props.buttonText5} link ={props.links5}/>
        </div>
       
      </div>

      
    </>
  );
}


const Button = (props) => {
  return (
    
    <Link to= {props.link}>
    <button 
    className="button"
    style={{
      backgroundColor: props.color,
    }}
    onClick={props.onClick}>

        {props.texte}
    
    </button>
    </Link>
  );
}





export default AlignMenuShorter