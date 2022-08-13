import {useRef, useState} from 'react';


const SimpleInput = (props) => {
  const [enteredName,setEnteredName]= useState(''); 
  const [enteredNameIsValid, setEnteredNameIsValid]= useState(true);

  const nameInputChangeHandler= (event)=>{    
    setEnteredName(event.target.value);
    console.log(enteredName);
  }

  const formSubmissionHandler = (e)=>{
    e.preventDefault();
    

    if(enteredName.length ===  0 ){
      setEnteredNameIsValid(false);
      console.log(enteredNameIsValid);
      return ;
    }
    else {
      console.log(enteredNameIsValid);
      console.log(enteredName);
      setEnteredName('');

    }
   


  }

  return (
    <form onSubmit={formSubmissionHandler} >
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={ nameInputChangeHandler } value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default S