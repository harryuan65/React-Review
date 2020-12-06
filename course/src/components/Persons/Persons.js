import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Persons = (props) => props.persons.map((person, index) => {
  return (
    // 因為state資料來自App.js，更改的handler也要從那邊來。
    <ErrorBoundary key={person.id}>
      <Person
        name={person.name}
        age={person.age}
        click={() => props.click(index)}
        changed={(event) => props.changed(event, person.id)}
      />
    </ErrorBoundary>
  );
})

// App.js --persons/click/change-->  Persons
//
// Persons
//    map props.persons
//         person1 set clicked=props.clicked
//         person2 set clicked=props.clicked
//         person3 set clicked=props.clicked
export default Persons;