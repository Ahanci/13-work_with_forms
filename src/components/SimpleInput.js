import {useState} from 'react';


const SimpleInput = (props) => {
  const [enteredName,setEnteredName]= useState('');
  const [enteredNameTouched,setEnteredNameTouched]=useState(false);
 
  const enteredNameIsValid= enteredName.trim() !== '';
  const nameInputIsValid= !enteredNameIsValid && enteredNameTouched;

  let formIsValid=false;
  if(enteredNameIsValid){
    formIsValid=true;
  }

  const nameInputChangeHandler= (event)=>{    
    setEnteredName(event.target.value.trim()); //REACT SCHEDULES THIS AND IF YOU NEED UPDATED STATE YOU MUST WRITE IT AGAIN;
    
  }
  const nameInputBlurHandler= ()=>{
    setEnteredNameTouched(true);
    
  }

  const formSubmissionHandler = (e)=>{
    e.preventDefault();
    setEnteredNameTouched(true);

    if(!enteredNameIsValid){
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);

  }

  const nameInputClasses= nameInputIsValid ? 'form-control  invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name'
        onChange={ nameInputChangeHandler }
        onBlur={nameInputBlurHandler}
        value={enteredName}/>
      </div>
      {nameInputIsValid && <p className='error-text' >Please type a name!!!</p>}
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
