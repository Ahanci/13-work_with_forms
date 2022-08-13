import {useState, useEffect} from 'react';


const SimpleInput = (props) => {
  const [enteredName,setEnteredName]= useState(''); 
  const [enteredNameIsValid, setEnteredNameIsValid]= useState(false);
  const [enteredNameTouched,setEnteredNameTouched]=useState(false);

  useEffect(()=>{
    if(enteredNameIsValid){
      console.log('nam is valid');
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler= (event)=>{    
    setEnteredName(event.target.value.trim()); //REACT SCHEDULES THIS AND IF YOU NEED UPDATED STATE YOU MUST WRITE IT AGAIN;
    if(event.target.value.trim() !== ''){ // WRITE AGAIN BECAUSE REACT SCHEDULING
      setEnteredNameIsValid(true);
      return ;
    }
  }
  const nameInputBlurHandler= ()=>{
    setEnteredNameTouched(true);
    if(enteredName === ''){
      setEnteredNameIsValid(false);
      return ;
    }
  }

  const formSubmissionHandler = (e)=>{
    e.preventDefault();
    setEnteredNameTouched(true);
    if(enteredName === ''){
      setEnteredNameIsValid(false);
      return ;
    }
    console.log(enteredName); 
    setEnteredNameIsValid(true);
    setEnteredName('');

  }

  const nameInputIsValid= !enteredNameIsValid && enteredNameTouched;
  console.log(nameInputIsValid);

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
