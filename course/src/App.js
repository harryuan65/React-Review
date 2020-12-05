import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        id: "abc",
        name: "Harry",
        age: 24,
      },
      {
        id: "def",
        name: "Jack",
        age: 34,
      },
      {
        id: "ghi",
        name: "Peter",
        age: 24,
      },
    ],
    showPersons: false,
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
  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(e=>e.id===id);
    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({}, this.state.persons[personIndex]) // 跟...等價
    const persons = [...this.state.persons];
    person.name = event.target.value;

    persons[personIndex] = person;
    this.setState({persons})
  }
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
      backgroundColor: 'green',
      color: 'white',
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
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={ (event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = ['red', 'bold'].join(' ');

    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <p className={classes}>This is added with dynamic class name</p>
        <button style={style} onClick={this.toggleNameHandler}>
          ToggleNames
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
