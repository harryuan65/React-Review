import React from 'react'
const resultStyle = {
  shared: {
    display: "inline-block",
    padding: '10px',
    borderRadius: "7px",
    fontSize: "18px",
    fontFamily: "Verdana"
  },
  valid: {
    backgroundColor: "#266013",
    color: "#fff"
  },
  invalid: {
    backgroundColor: "#6C0123",
    color: "#fff"
  }
}
const ValidationComponent = (props) => {
  let result = null;
  let sentence = props.sentence;
  if(sentence){
    if(sentence.length > 5){
      result = (
        <p style={{...resultStyle.shared, ...resultStyle.valid}}>Sentence Long Enough :)</p>
      );
    }
    else{
      result = (
        <p style={{...resultStyle.shared, ...resultStyle.invalid}}>Sentence Too Short!</p>
      );
    }
  }
  return <div>
    {result}
  </div>;
}

export default ValidationComponent
