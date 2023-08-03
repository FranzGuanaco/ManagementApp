import React, { Component } from 'react';
import '../Style/ParametersStyle.css'
import AlignMenuShorter from '../Menu/AlignMenuShorter';
import axios from 'axios';

class Parameters extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isModalAdminOpen: false,
            username: '',
            password: '',
          isModalPasswordOpen: false,
            username2: '',
            password2: '',
          isModalDeleteOpen: false,
            username3: '',
            password3: '',
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

      DeleteRequest = () => {
        this.setState({ isModalDeleteOpen: true });
      }

      CloseDeleteRequest = () => {
        this.setState({ isModalDeleteOpen: false });
      }
    
      handleInputChange = (event) => {
        this.setState({ password: event.target.value });
        this.setState({ username: event.target.value });
      }

      handleSubmit = () => {
        const { username, password } = this.state;
      
        axios.post('http://localhost:3001/admin', {
          username: username,
          password: password
        }, {
          
        })
        .then(response => {
          if (response.status === 200) {
            console.log('Admin added');
            this.closeModalAdmin();
          } else {
            console.log('Admin not added');
          }
        })
        .catch(error => console.error(error));
      }
      
      
      handleSubmit2 = () => {
        const { username2, password2 } = this.state;
        // Faites quelque chose avec les informations de l'utilisateur
        console.log(`Ancien mot de passe : ${username2}, Nouveau mot de passe : ${password2}`);
        this.closeModalAdmin();
      }

      handleSubmit3= () => {
        const { username3, password3 } = this.state;
        // Faites quelque chose avec les informations de l'utilisateur
        axios.get("http://localhost:3001/delete")
        .then((response) => {
          console.log('junior supp')
        })
        .catch((error) => {
          console.log('erreur')
        });
        console.log(`Acompte de ${username3} au mot de passe : ${password3} supprimé`);
        this.CloseDeleteRequest();
      }

        LogOutRequest = (e) => {
            alert('êtes vous sûr de vouloir vous déconnecter ?')

      }
  render() {
    const { isModalAdminOpen, username, password } = this.state;
    const { isModalPasswordOpen, username2, password2 } = this.state;
    const { isModalDeleteOpen, username3, password3 } = this.state;

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

    <div class="Paramcontainer" onClick={this.DeleteRequest}>
      <div class="OptionTitle">Delete account</div>
      <div class="OptionText">{Parameters.defaultProps.text}</div>
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
              <input type="password2" id="password2" className='inputAddAdmin' name="password2" value={password2} onChange={this.handleInputChange} />
              <button onClick={this.handleSubmit2}>Valider</button>
            </div>
          </div>
        )}

{isModalDeleteOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.CloseDeleteRequest}>&times;</span>
              <h2>Mot de passe:</h2>
              <label htmlFor="username">Ancien mot de passe :</label>
              <input type="text" id="username2" className='inputAddAdmin' name="username3" value={username3} onChange={this.handleInputChange} />
              <label htmlFor="password">Nouveau mot de passe :</label>
              <input type="password3" id="password2" className='inputAddAdmin' name="password3" value={password3} onChange={this.handleInputChange} />
              <button onClick={this.handleSubmit3}>Valider</button>
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


