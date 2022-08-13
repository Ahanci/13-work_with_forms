import {useState} from 'react';


const SimpleInput = (props) => {
  const [enteredName,setEnteredName]= useState(''); 
  const [enteredNameIsValid, setEnteredNameIsValid]= useState(true);

  const nameInputChangeHandler= (event)=>{    
    setEnteredName(event.target.value.trim());
  }

  const formSubmissionHandler = (e)=>{
    e.preventDefault();
    if(enteredName === ''){
      setEnteredNameIsValid(false);
      return ;
    }
    console.log(enteredName); 
    setEnteredNameIsValid(true);
    setEnteredName('');

  }

  const nameInputClasses= enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name'
        onChange={ nameInputChangeHandler }
        value={enteredName}/>
      </div>
      {!enteredNameIsValid && <p className='error-text' >Please type a name!!!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
