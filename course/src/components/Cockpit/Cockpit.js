import React from 'react'
import classes from './Cockpit.css';

const Cockpit = (props) => {
  let btnClass = '';
  if(props.showPersons){
    btnClass= classes.Red;
  }
  console.log(btnClass);

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  if (props.persons.length === 0) {
    assignedClasses.push(classes['Button-test']);
  }

  return(
    <div className={classes.Cockpit}>
      <h1>Welcome to React {props.title}</h1>
      <p className={assignedClasses.join(" ")}>
        This is added with dynamic class name
      </p>
      <button className={btnClass} onClick={props.toggle}>
        ToggleNames
      </button>
    </div>
  )
}
// 把App.js的這包搬過來，但是只能回傳single root，暫時先用div包著
// <h1>Welcome to React</h1>
// <p className={assignedClasses.join(" ")}>
//   This is added with dynamic class name
// </p>
// <button className={btnClass} onClick={this.toggleNameHandler}>
//   ToggleNames
// </button>
export default Cockpit;