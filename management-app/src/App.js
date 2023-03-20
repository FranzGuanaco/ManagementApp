import React from 'react';
import ReactDOM from 'react-dom';
import BoxId from './BoxId';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Employee from './Employee';
import ViewAccount from './ViewAccount';
import EditAccount from './EditAccount';

function App() {

  return(

    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<BoxId/>} />
        <Route path='/Homepage' exact element={<Homepage/>} />
        <Route path='/Employee' exact element={<Employee/>} />
        <Route path='/ViewAccount' exact element={<ViewAccount/>} />
        <Route path='/EditAccount' exact element={<EditAccount/>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
  
}


//ReactDOM.render(<App />, document.getElementById('root'));

export default App;
