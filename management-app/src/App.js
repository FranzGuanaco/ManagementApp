import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode'; // Assurez-vous d'importer la bibliothèque jwt-decode
import BoxId from './Interface/BoxId';
import Homepage from './Interface/Homepage';
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
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: null,
      username: '11',
    };
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route
              path="/"
              element={<BoxId/>}
            />
           <Route
              path="/Homepage"
              exact
              element={<Homepage dataFromA={this.state.username}/>}
            />

            <Route
              path="/Employee details"
              exact
              element={<ViewAccount />}
            />
            <Route
              path="/EditAccount"
              exact
              element={<EditAccount />}
            />
            <Route
              path="/AddAccount"
              exact
              element={<AddAccount />}
            />
            <Route path="/Track" exact element={<Track />} />
            <Route
              path="/NewProject"
              exact
              element={<NewProject />}
            />
            <Route
              path="/EditProject"
              exact
              element={<EditProject />}
            />
            <Route path="/Mail" exact element={<Mail />} />
            <Route
              path="/Staffing"
              exact
              element={<Staffing />}
            />
            <Route
              path="/Parameters"
              exact
              element={<Parameters />}
            />
            <Route
              path="/MailSent"
              exact
              element={<MailSent />}
            />
            <Route
              path="/Projects"
              exact
              element={<Projects />}
            />
            <Route
              path="/Report"
              exact
              element={<Report />}
            />
            <Route
              path="/Vacancy"
              exact
              element={<Vacancy />}
            />
            <Route
              path="/Calendar"
              exact
              element={<Agenda />}
            />
          </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;