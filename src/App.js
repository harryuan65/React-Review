import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
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
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button>Switch Name</button>
        {
          this.state.persons.map(person=>{
            return (<Person name={person.name} age={person.age}/>)
          })
        }
      </div>
    );
  }
}

export default App;
