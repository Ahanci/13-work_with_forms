import {useRef, useState} from 'react';


const SimpleInput = (props) => {
  const inputRef= useRef();
  const [enteredName,setEnteredName]= useState(''); 
  // const [enteredNameIsValid, setEnteredNameIsValid]= useState(true);

  const nameInputChangeHandler= (event)=>{    
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (e)=>{
    e.preventDefault();
    console.log(enteredName); 
    const inputValue=inputRef.current.value;
    console.log(inputValue);
    setEnteredName('');

  }

  return (
    <form onSubmit={formSubmissionHandler} >
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name'
        ref={inputRef} 
        onChange={ nameInputChangeHandler }
        value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
