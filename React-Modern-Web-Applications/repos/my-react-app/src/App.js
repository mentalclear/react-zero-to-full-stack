//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Greeting from './Greeting'; // Default import. Removed.
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';

// Creating components in React the older way
// class App extends React.Component {

// }

const people = [{
  name: "John",
  age: 40,
  hairColor: "brown"
},
{
  name: "Helga",
  age: 25,
  hairColor: "red"
},
{
  name: "Dwyane",
  age: 55,
  hairColor: "blond"
}];


// Before big change for Lesson 2

// Modern way of creating components.
function App() {

  let adjective = 'cool';
  let url = "https://reactjs.org"



  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Dimm" numberOfMessages={50} />
        <PeopleList people={people} />
        <button onClick={() => alert("Hello!")}>Click Me!</button>
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

// Way to add inline styles with React
// <p style={{ color: 'red', fontSize: '96px' }}> Big Red Text </p>