import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
	if (event.target.value.trim().length > 0){
		setIsValid(true);
	}
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
	if (enteredValue.trim().length === 0){
		setIsValid(false);
		return;
	}
    props.onAddGoal(enteredValue);
  };

// label has inline conditional styles
// input has class conditional styles
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid? 'red': 'black'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} className={`${!isValid ? 'invalid' : ''}`} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
