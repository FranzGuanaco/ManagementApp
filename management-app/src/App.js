import React from 'react';
import ReactDOM from 'react-dom';
import BoxId from './Box/BoxId';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Employee from './Employee';
import ViewAccount from './ViewAccount';
import EditAccount from './EditAccount';
import Track from './Track';
import NewProject from './NewProject';
import Mail from './Mail';

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
      </Routes>
      </BrowserRouter>
      </div>
  );
  
}


//ReactDOM.render(<App />, document.getElementById('root'));

export default App;
