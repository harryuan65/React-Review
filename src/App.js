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
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age: 24,
        },
        {
          name: "Jacky", age: 34,
        },
        {
          name: "Peterson", age: 24,
        }
      ]
    }
    )
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={this.switchNameHandler.bind(this, "FromButton")}>Switch Name2</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "ClickedOnMe")}
         />
         <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "ClickedOnMe")}
         />
         <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "ClickedOnMe")}
         />
      </div>
    );
  }
}

export default App;
