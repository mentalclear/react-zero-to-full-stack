import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages';

import { CounterButton } from './CounterButton';
import { CongratulationMessage } from './CongratulationMessage';

function App() {
  const [numberOfClicks, setNumberOfCliccks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfCliccks(numberOfClicks + 1);

  return (
    <div className="App">
      <Router>
        <Link to="/"> Go Home </Link>
        <Link to="/counter"> Go to Counter Page </Link>
        <Link to="/people-list"> Go to People List Page </Link>

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
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
