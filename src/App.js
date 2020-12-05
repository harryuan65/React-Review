import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Harry",
        age: 24,
      },
      {
        name: "Jack",
        age: 34,
      },
      {
        name: "Peter",
        age: 24,
      },
    ],
    showPersons: true,
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 24,
        },
        {
          name: "Jacky",
          age: 34,
        },
        {
          name: "Peterson",
          age: 24,
        },
      ],
    });
  };
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 24,
        },
        {
          name: "Jacky",
          age: 34,
        },
        {
          name: "Peterson",
          age: 24,
        },
      ],
    });
    console.log(this.state);
  };
  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
    console.log(this.state);
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    // preferred way to render components conditionally
    //put this inside render because we want latest state
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.switchNameHandler}
                changed={this.nameChangeHandler}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "FromButton")}
        >
          Switch Name2
        </button>
        <button style={style} onClick={this.toggleNameHandler}>
          ToggleNames
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
