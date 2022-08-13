import useInput from '../hooks/use-input';


const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError:nameInputHasError,
    valueChangeHandler:nameChangeHandler,
    isValid:enteredNameIsValid,
    reset:resetNameInput,
    inputBlurHandler:nameBlurHandler}= useInput( value => value.trim() !== '');
    
    const {
      value: enteredMail,
      hasError:mailInputHasError,
      valueChangeHandler:mailChangeHandler,
      isValid:enteredMailIsValid,
      reset:resetMailInput,
      inputBlurHandler: mailBlurHandler}= useInput( (value) =>  value.trim().length>7 && value.includes('@'));

  let formIsValid = false;

  if(enteredNameIsValid && enteredMailIsValid){
    formIsValid=true;
  }

  const formSubmissionHandler = (e)=>{
    e.preventDefault();

    if(!enteredNameIsValid && !enteredMailIsValid){
      return;
    }
    resetNameInput();

    resetMailInput();

  }

  const nameInputClasses= nameInputHasError ? 'form-control  invalid' : 'form-control';
  const mailInputClasses= mailInputHasError ? 'form-control  invalid' : 'form-control';

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
        onChange={ mailChangeHandler }
        onBlur={mailBlurHandler}
        value={enteredMail}/>
         {mailInputHasError && <p className='error-text' >Please type an valid email!!!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
}


export default SimpleInput;
