import React from 'react';
import ReactDOM from 'react-dom';
import BoxId from './BoxId';

function App() {

  return(
    <div className="first">
      <BoxId/>
    </div>
  );
  
}


ReactDOM.render(<App />, document.getElementById('root'));

export default App;
