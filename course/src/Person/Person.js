import React from "react";
// import "./Person.css";
import styled from "styled-components";

// 這個styled.xxx 本身就回傳一個component，不必也不能 const StyleDiv = (props)=>{} xxxxx
const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0px 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;
const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }
  return (
    <StyleDiv>
      <p onClick={props.click}>
        Hi, I'm {props.name}. I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input onChange={props.changed} value={props.name}></input>
    </StyleDiv>
  );
};

export default person;
