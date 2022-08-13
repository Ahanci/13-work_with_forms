import{useState} from "react";

const useInput= (validateValue)=>{
    const [enteredvalue,setEnteredvalue]= useState('');
    const [isTouched,setIsTouched]=useState(false);

    const valueIsValid= validateValue(enteredvalue);
    const hasError= !valueIsValid && isTouched;

    const valueChangeHandler= (event)=>{    
        setEnteredvalue(event.target.value.trim()); //REACT SCHEDULES THIS AND IF YOU NEED UPDATED STATE YOU MUST WRITE IT AGAIN;
        
      }
    const inputBlurHandler= ()=>{
        setIsTouched(true);
        
      }
    const reset= ()=>{
        setEnteredvalue('');
        setIsTouched(false);
    }
 
    return {
        value:enteredvalue,
        hasError,
        isValid:valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}
export default useInput;