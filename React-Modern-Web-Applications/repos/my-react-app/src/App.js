import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage,
  UserProfilePage
}
  from './pages';
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';

function App() {
  const [numberOfClicks, setNumberOfCliccks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfCliccks(numberOfClicks + 1);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-header">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/counter">
              <CounterButtonPage />
            </Route>
            <Route path="/people-list">
              <PeopleListPage />
            </Route>
            <Route path="/protected">
              <ProtectedPage />
            </Route>
            <Route path="/user">
              <UserProfilePage />
            </Route>
            <Route path="/forms">
              <Router>
                <FormsNavBar />
                <Route path="/forms/controlled">
                  <ControlledFormPage />
                </Route>
                <Route path="/forms/uncontrolled">
                  <ControlledFormPage />
                </Route>
              </Router>
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
