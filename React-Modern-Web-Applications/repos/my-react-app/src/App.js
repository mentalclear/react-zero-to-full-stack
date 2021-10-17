import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Greeting from './Greeting'; // Default import. Removed.
import { Greeting } from './Greeting';

// Creating components in React the older way
// class App extends React.Component {

// }

// Modern way of creating components.
function App() {

  let adjective = 'cool';
  let url = "https://reactjs.org"

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Dimm" numberOfMessages={5} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is so {adjective}!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
