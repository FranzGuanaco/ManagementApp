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
import MailSent from './Interface/MailSent';
import Projects from './Interface/Projects';
import Report from './Interface/Report';
import EditProject from './Interface/EditProject';
import Vacancy from './Interface/Vacancy';
import Calendar from './Interface/Calendar';
import Agenda from './Interface/Agenda';
import AddAccount from './Interface/AddAccount';

function App() {

  return(

    <div className="App">
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<BoxId/>} />  {/*responsive done */}
        <Route path='/Homepage' exact element={<Homepage/>} /> {/*responsive done */}
        <Route path='/Homepage' exact element={<Employee/>} /> {/*responsive done */}
        <Route path='/Employee details' exact element={<ViewAccount/>} /> {/*responsive done */}
        <Route path='/EditAccount' exact element={<EditAccount/>} /> {/*responsive done */}
        <Route path='/AddAccount' exact element={<AddAccount/>} /> {/*responsive done */}
        <Route path='/Track' exact element={<Track/>} /> {/*priorite */}
        <Route path='/NewProject' exact element={<NewProject/>} />
        <Route path='/EditProject' exact element={<EditProject/>} />
        <Route path='/Mail' exact element={<Mail/>} /> {/*priorite */}
        <Route path='/Staffing' exact element={<Staffing/>} /> {/*priorite */}
        <Route path='/Parameters' exact element={<Parameters/>} /> {/*priorite */}
        <Route path='/MailSent' exact element={<MailSent/>} />
        <Route path='/Projects' exact element={<Projects/>} />
        <Route path='/Report' exact element={<Report/>} />
        <Route path='/Vacancy' exact element={<Vacancy/>} />
        <Route path='/Calendar' exact element={<Agenda/>} /> {/*priorite */}
      </Routes>
      </BrowserRouter>
      </div>
  );
  
}


//ReactDOM.render(<App />, document.getElementById('root'));

export default App;
