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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
  }

  handleLogin = () => {
    window.location.href = "/Staffing";
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
          <input type="submit" value="Se connecter" onClick={this.handleLogin} />
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

