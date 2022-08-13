import {useState} from 'react';
import useInput from '../hooks/use-input';


const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError:nameInputHasError,
    valueChangeHandler:nameChangeHandler,
    isValid:enteredNameIsValid,
    reset:resetNameInput,
    inputBlurHandler:nameBlurHandler}= useInput( value => value.trim() !== '');




  const [enteredMail,setEnteredMail]= useState('');
  const [enteredMailTouched,setEnteredMailTouched]=useState(false); 

  const enteredMailIsValid= enteredMail.trim().length > 7 && enteredMail.includes('@');
  const mailInputIsValid= !enteredMailIsValid && enteredMailTouched;

  let formIsValid = false;

  if(enteredNameIsValid && enteredMailIsValid){
    formIsValid=true;
  }

  const mailInputChangeHandler= (e)=>{
    setEnteredMail(e.target.value.trim());
  }

  const mailInputBlurHandler= ()=>{
    setEnteredMailTouched(true);
  }

  const formSubmissionHandler = (e)=>{
    e.preventDefault();

    setEnteredMailTouched(true);

    if(!enteredNameIsValid && !enteredMailIsValid){
      return;
    }
    resetNameInput();

    setEnteredMail('');
 
    setEnteredMailTouched(false);

  }

  const nameInputClasses= nameInputHasError ? 'form-control  invalid' : 'form-control';
  const mailInputClasses= mailInputIsValid ? 'form-control  invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name'
        onChange={ nameChangeHandler }
        onBlur={nameBlurHandler}
        value={enteredName}/>
         {nameInputHasError && <p className='error-text' >Please type a name!!!</p>}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor='mail'>Your Email</label>
        <input 
        type='email' 
        id='email'
        onChange={ mailInputChangeHandler }
        onBlur={mailInputBlurHandler}
        value={enteredMail}/>
         {mailInputIsValid && <p className='error-text' >Please type an valid email!!!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
}


export default SimpleInput;
