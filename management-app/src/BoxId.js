import React from "react";
import "./App.css";

const BoxId = () => {

    return (
        
    <form>
    <label htmlFor="username">Nom d'utilisateur :</label>
  <input type="text" id="username" name="username" placeholder=""/>
  <label htmlFor="password">Mot de passe :</label>
  <input type="password" id="password" name="password" />
  <input type="submit" value="Se connecter" />
  </form>
);
}

export default BoxId