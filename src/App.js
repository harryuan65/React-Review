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
  deletePersonHandler = (index) => {
    // let persons = this.state.persons;
    // persons.splice(index, 1); //但是javascript的array跟object是reference type，這邊已經直接動到state了，這樣很糟
    // this.setState({persons});

    let persons = [...this.state.persons];
    // let persons = this.state.persons.slice(); //跟上面...等價
    persons.splice(index, 1);
    this.setState({persons})
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button style={style} onClick={this.toggleNameHandler}>
          ToggleNames
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
