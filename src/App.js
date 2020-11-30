import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {
  const [personState, setPersonsState] = useState({
    persons: [
      {
        name: "Harry", age: 24,
      },
      {
        name: "Jack", age: 34,
      },
      {
        name: "Peter", age: 24,
      }
    ]
  });

  const switchName = () => {
    setPersonsState({
      persons: [
        {
          name: "Harry Potter", age: 30,
        },
        {
          name: "Jacky Chen", age: 34,
        },
        {
          name: "Peteron", age: 24000,
        }
      ]
    })
  }
  return (
    <div className="App">
      <h1 className="App-title">Welcome to React</h1>
      <button onClick={switchName}>Switch Name</button>
      {
        personState.persons.map(person=>{
          return (<Person name={person.name} age={person.age}/>)
        })
      }
    </div>
  );
}

export default App;