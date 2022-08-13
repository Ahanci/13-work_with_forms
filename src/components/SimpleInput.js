import {useState} from 'react';


const SimpleInput = (props) => {
  const [enteredName,setEnteredName]= useState('');
  const [enteredNameTouched,setEnteredNameTouched]=useState(false);

  const [enteredMail,setEnteredMail]= useState('');
  const [enteredMailTouched,setEnteredMailTouched]=useState(false);
 
  const enteredNameIsValid= enteredName.trim() !== '';
  const nameInputIsValid= !enteredNameIsValid && enteredNameTouched;

  const enteredMailIsValid= enteredMail.trim().length > 7 && enteredMail.includes('@');
  const mailInputIsValid= !enteredMailIsValid && enteredMailTouched;

  let formIsValid = false;

  if(enteredNameIsValid && enteredMailIsValid){
    formIsValid=true;
  }

  const nameInputChangeHandler= (event)=>{    
    setEnteredName(event.target.value.trim()); //REACT SCHEDULES THIS AND IF YOU NEED UPDATED STATE YOU MUST WRITE IT AGAIN;
    
  }
  const mailInputChangeHandler= (e)=>{
    setEnteredMail(e.target.value.trim());
  }

  const nameInputBlurHandler= ()=>{
    setEnteredNameTouched(true);
    
  }
  const mailInputBlurHandler= ()=>{
    setEnteredMailTouched(true);
  }

  const formSubmissionHandler = (e)=>{
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredMailTouched(true);

    if(!enteredNameIsValid && !enteredMailIsValid){
      return;
    }
    setEnteredName('');
    setEnteredMail('');
    setEnteredNameTouched(false);
    setEnteredMailTouched(false);

  }

  const nameInputClasses= nameInputIsValid ? 'form-control  invalid' : 'form-control';
  const mailInputClasses= mailInputIsValid ? 'form-control  invalid' : 'form-control';

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
         {nameInputIsValid && <p className='error-text' >Please type a name!!!</p>}
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
};

export default SimpleInput;
