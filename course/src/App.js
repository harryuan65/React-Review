import React, { Component } from "react";
import Person from "./Person/Person";
import classes from "./App.css";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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
    this.setState({ persons });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((e) => e.id === id);
    const person = {
      ...this.state.persons[personIndex],
    };
    // const person = Object.assign({}, this.state.persons[personIndex]) // 跟...等價
    const persons = [...this.state.persons];
    person.name = event.target.value;

    persons[personIndex] = person;
    this.setState({ persons });
  };
  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
    console.log(this.state);
  };
  render() {
    // preferred way to render components conditionally
    //put this inside render because we want latest state
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              // 1. 包在外面這稱為 High Order Component，可以監聽一些事件或擴充某些功能
              // 2. 因為現在每個render單位最外層由ErrorBoundary開始，所以key要放在這邊
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    if (this.state.persons.length === 0) {
      assignedClasses.push(classes['Button-test']);
    }

    return (
      <div className={classes.App}>
        <h1>Welcome to React</h1>
        <p className={assignedClasses.join(" ")}>
          This is added with dynamic class name
        </p>
        <button className={btnClass} onClick={this.toggleNameHandler}>
          ToggleNames
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
