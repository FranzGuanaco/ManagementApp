import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import "../BoxId.css"

class BoxId extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
    };
  }

  handleInputChange = (event) => {
    
    const value = event.target.value;

    this.setState({
      userName: value
    });
  }

  handleLogin = () => {
    window.location.href = "/Homepage";
  }

  handleSubmit = async (event) => {
    event.preventDefault();
  
    const { userName } = this.state;
  
    // Récupérer le mot de passe du formulaire
    const password = event.target.password.value;
  
    // Envoyer les informations de connexion au serveur
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
        },
      body: JSON.stringify({ username: userName, password }),
      });

  
      if (response.ok) {
        console.log('User authenticated');
        this.handleLogin();
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }
  

  render() {
   
    const { userName } = this.state.userName;

    return (
      <div className="Id">
        <form className="formBox" onSubmit={this.handleSubmit}>
          <label htmlFor="username">{this.props.title} :</label>
          <input type="text" id="username" name="userName" value={userName} placeholder="" onChange={this.handleInputChange} />
          <label htmlFor="password">{this.props.title2}</label>
          <input type="password" id="password" name="password" />
          <input type="submit" value="Se connecter"/>
        </form>

      </div>
    );
  }
}

BoxId.defaultProps = {
  title: 'Username',
  title2: 'Password',
}

export default BoxId;






