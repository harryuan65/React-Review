import React, { Component } from 'react'
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';
export class App extends Component {
  state = {
    sentence: "",
    colors: [
      "#F5B7B1",
      "#F2D7D5",
      "#F0B27A",
      "#FAD7A0",
      "#FFF1A4",
      "#F9E79F",
      "#A3E4D7",
      "#ABEBC6",
      "#85C1E9",
      "#AED6F1",
      "#EBDEF0",
      "#D7BDE2"
    ]
  }

  inputChangeHandler = (event) => {
    this.setState({sentence: event.target.value})
  }

  deleteChar = (index) => {
    let sentence = this.state.sentence;
    let sentenceArray = sentence.split('');
    sentenceArray.splice(index, 1);
    let newSentence = sentenceArray.join('');
    this.setState({sentence: newSentence});
  }
  render() {
    return (
      <div className="App">
        <h2>List Practice</h2>
        <input autoFocus={true} onChange={this.inputChangeHandler} value={this.state.sentence} />
        <p>{this.state.sentence}</p>
        <ValidationComponent sentence={this.state.sentence}/>
        <div style={{maxWidth: "600px"}}>
          {this.state.sentence.split('').map((char, index)=>{
            return <CharComponent
                      char={char}
                      key={index}
                      color={this.state.colors[index % this.state.colors.length]}
                      deleteChar={()=>this.deleteChar(index)}
                    />
          })}
        </div>
      </div>
    );
  }
}

export default App
