import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const BoxId = (props) => {

  

    return (
        
    <form>
      <label htmlFor="username">{props.title} :</label>
  <input type="text" id="username" name="username" placeholder="" />
  <label htmlFor="password">{props.title2}</label>
  <input type="password" id="password" name="password" />
  <input type="submit" value="Se connecter"/>
  </form>
);
}

BoxId.defaultProps = {
  title: 'Username',
  title2: 'Password',
}

export default BoxId