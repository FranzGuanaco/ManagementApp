import React from 'react';
import ReactDOM from 'react-dom';
import BoxId from './BoxId';
import Homepage from './Homepage';
import {Routes, Route} from 'react-router-dom'

function App() {

  return(

    <div className="App">
      <Routes>
        <Route path='/' element={<BoxId/>} />
        <Route path='/Homepage' element={<Homepage/>} />
      </Routes>
      </div>
  );
  
}


//ReactDOM.render(<App />, document.getElementById('root'));

export default App;
