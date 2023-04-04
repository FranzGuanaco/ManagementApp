import React from 'react';
import ReactDOM from 'react-dom';
import BoxId from './Interface/BoxId';
import Homepage from './Interface/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Employee from './Interface/Employee';
import ViewAccount from './Interface/ViewAccount';
import EditAccount from './Interface/EditAccount';
import Track from './Interface/Track';
import NewProject from './Interface/NewProject';
import Staffing from './Interface/Staffing';
import Mail from './Interface/Mail';
import Parameters from './Interface/Parameters';

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
        <Route path='/Track' exact element={<Track/>} />
        <Route path='/NewProject' exact element={<NewProject/>} />
        <Route path='/Mail' exact element={<Mail/>} />
        <Route path='/Staffing' exact element={<Staffing/>} />
        <Route path='/Parameters' exact element={<Parameters/>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
  
}


//ReactDOM.render(<App />, document.getElementById('root'));

export default App;
