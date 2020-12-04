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
      },
    ],
    showPersons: false
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
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {
          name: event.target.value, age: 24,
        },
        {
          name: "Jacky", age: 34,
        },
        {
          name: "Peterson", age: 24,
        }
      ]
    })
    console.log(this.state);
  }
  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
    console.log(this.state);
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "FromButton")}>Switch Name2</button>
        <button
          style={style}
          onClick={this.toggleNameHandler}>ToggleNames</button>
        {
          this.state.showPersons ?
          <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "ClickedOnMe")}
            changed={this.nameChangeHandler}
           />
           <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={ () => this.switchNameHandler("靠北喔")}
            changed={this.nameChangeHandler}
           />
           <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "ClickedOnMe")}
            changed={this.nameChangeHandler}
           />
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;
