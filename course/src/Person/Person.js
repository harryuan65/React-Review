import React from 'react';
import "./Person.css"
const person = (props) => {
  return(
    <div className="Person">
      <p onClick={props.click}>Hi, I'm {props.name}. I'm {props.age}</p>
      <p>{props.children}</p>
      <input onChange={props.changed} value={props.name}></input>
    </div>
  );
}

export default person;