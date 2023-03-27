import React from "react";
import { Link } from "react-router-dom";
import "../BoxId.css"

const BoxId = (props) => {

  

    return (

      <div className="Id">
        
    <form>

      <label htmlFor="username">{props.title} :</label>
        <input type="text" id="username" name="username" placeholder="" />
      <label htmlFor="password">{props.title2}</label>
        <input type="password" id="password" name="password" />
        <Link to="/Homepage">   <input type="submit" value="Se connecter"/> </Link>
    </form>
    </div>
);
}

BoxId.defaultProps = {
  title: 'Username',
  title2: 'Password',
}

export default BoxId