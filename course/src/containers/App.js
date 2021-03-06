import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
import classes from "./App.css";
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
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.toggleNameHandler}
          />
        {persons}
      </div>
    );
  }
}

export default App;
