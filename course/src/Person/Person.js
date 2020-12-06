import React from "react";
import classes from "./Person.css";

// 這個styled.xxx 本身就回傳一個component，不必也不能 const StyleDiv = (props)=>{} xxxxx

const person = (props) => {
  let num = Math.random();
  if(num> 0.7){
    throw new Error(`Something wne wrong! Number is ${num}!`);
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Hi, I'm {props.name}. I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
