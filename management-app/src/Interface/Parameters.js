import React, { Component } from 'react';
import '../Style/ParametersStyle.css'
import AlignMenuShorter from '../Menu/AlignMenuShorter';

class Parameters extends Component {
    constructor(props) {
        super(props);

      }
  render() {
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
        <div class="Paramcontainer">
      <div class="OptionTitle">Change Password</div>
      <div class="OptionText">{this.props.text || Parameters.defaultProps.text}</div>
    </div>
   
    <div class="Paramcontainer">
      <div class="OptionTitle">Add Admin</div>
      <div class="OptionText">{this.props.text || Parameters.defaultProps.text}</div>
    </div>
   
    <div class="Paramcontainer">
      <div class="OptionTitle">Log Out</div>
      <div class="OptionText">{this.props.text || Parameters.defaultProps.text}</div>
    </div>
      </div>
    );
  }
}

Parameters.defaultProps = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis bibendum urna, at luctus ante. Sed quis dolor eu ipsum scelerisque interdum',
  }

export default Parameters;


