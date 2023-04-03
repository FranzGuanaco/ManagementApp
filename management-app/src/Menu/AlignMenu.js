import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "../Style/Button.css"
import "../Style/Menu.css"


function AlignMenu(props) {
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
        <Button texte ={props.buttonText} link ={props.links} />
        <Button texte ={props.buttonText1} link ={props.links1}/>
        <Button texte ={props.buttonText2} link ={props.links2}/>
        <Button texte ={props.buttonText3} link ={props.links3}/>
        <Button texte ={props.buttonText4} link ={props.links4}/>
        <Button texte ={props.buttonText5} link ={props.links5}/>
        <Button texte ={props.buttonText6} link ={props.links6}/>
        </div>
       
      </div>

      
    </>
  );
}


 export const Button = (props) => {
  return (
    
    <Link to= {props.link}>
    <button 
    className="button"
    style={{
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
      minWidth: props.minWidth
      
    }}
    onClick={props.onClick}>

        {props.texte}
    
    </button>
    </Link>
  );

}

Button.defaultProps = {
  color: "#0078C7",
  width: "115px",
  height: "50px",
  minWidth: "200px",
  onClick: () => {}
};



export default AlignMenu ;
