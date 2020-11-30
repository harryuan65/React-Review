import React from 'react';

const person = (props) => {
  return(
    <div>
      <p>Hi, I'm {props.name}. I'm {props.age}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default person;