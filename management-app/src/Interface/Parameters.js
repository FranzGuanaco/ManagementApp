import React, { Component } from 'react';
import '../Style/ParametersStyle.css'
import AlignMenuShorter from '../Menu/AlignMenuShorter';

class Parameters extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isModalAdminOpen: false,
            username: '',
            password: '',
          isModalPasswordOpen: false,
            username2: '',
            password2: ''
        };

      }
    
      openModalAdmin = () => {
        this.setState({ isModalAdminOpen: true });
      }
    
      closeModalAdmin = () => {
        this.setState({ isModalAdminOpen: false });
      }

      openModalPassword = () => {
        this.setState({ isModalPasswordOpen: true });
      }
    
      closeModalPassword = () => {
        this.setState({ isModalPasswordOpen: false });
      }
    
      handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
    
      handleSubmit = () => {
        const { username, password } = this.state;
        // Faites quelque chose avec les informations de l'utilisateur
        console.log(`Nom d'utilisateur : ${username}, Mot de passe : ${password}`);
        this.closeModalAdmin();
      }

        LogOutRequest = (e) => {
            alert('êtes vous sûr de vouloir vous déconnecter ?')

      }
  render() {
    const { isModalAdminOpen, username, password } = this.state;
    const { isModalPasswordOpen, username2, password2 } = this.state;

    return (
      <div className="staffing">
        <div className='menu-right'>
          <AlignMenuShorter
            bottom="40px"
            buttonText="Project"
            links="/"
            buttonText1="Staffing"
            links1="/"
            buttonText2="Calendar"
            links2="/"
            buttonText3="Finance"
            links3="/"
            buttonText4="Vacancy"
            links4="/"
            buttonText5="Mail"
            links5="/"
          />
        </div>
        <div class="Paramcontainer" onClick={this.openModalPassword}>
      <div class="OptionTitle">Change Password</div>
      <div class="OptionText">{this.props.text || Parameters.defaultProps.text}</div>
    </div>
   
    <div class="Paramcontainer" onClick={this.openModalAdmin}>
      <div class="OptionTitle">Add Admin</div>
      <div class="OptionText">{this.props.text || Parameters.defaultProps.text}</div>
    </div>
   
    <div class="Paramcontainer" onClick={this.LogOutRequest}>
      <div class="OptionTitle">Log Out</div>
      <div class="OptionText">{this.props.text || Parameters.defaultProps.text}</div>
    </div>



    {isModalAdminOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModalAdmin}>&times;</span>
              <h2>Ajouter un compte</h2>
              <label htmlFor="username">Nom d'utilisateur :</label>
              <input type="text" id="username" className='inputAddAdmin' name="username" value={username} onChange={this.handleInputChange} />
              <label htmlFor="password">Mot de passe :</label>
              <input type="password" id="password" className='inputAddAdmin' name="password" value={password} onChange={this.handleInputChange} />
              <button onClick={this.handleSubmit}>Valider</button>
            </div>
          </div>
        )}

{isModalPasswordOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModalPassword}>&times;</span>
              <h2>Mot de passe:</h2>
              <label htmlFor="username">Ancien mot de passe :</label>
              <input type="text" id="username2" className='inputAddAdmin' name="username2" value={username2} onChange={this.handleInputChange} />
              <label htmlFor="password">Nouveau mot de passe :</label>
              <input type="password" id="password2" className='inputAddAdmin' name="password2" value={password2} onChange={this.handleInputChange} />
              <button onClick={this.handleSubmit}>Valider</button>
            </div>
          </div>
        )}
           
   </div>

   
    );
  }
}

Parameters.defaultProps = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis bibendum urna, at luctus ante. Sed quis dolor eu ipsum scelerisque interdum',
  }

export default Parameters;


