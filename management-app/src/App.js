import React from 'react';
import ReactDOM from 'react-dom';
import BoxId from './BoxId';
import Button from './Button';

function App() {

  return(
    <div className="first">
      <BoxId/>
    
      <Button/>
    </div>
  );
  
}


ReactDOM.render(<App />, document.getElementById('root'));

export default App;
