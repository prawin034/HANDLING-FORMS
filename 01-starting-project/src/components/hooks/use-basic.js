import { useState } from 'react';
const useHook = (value) => {
  const [Enteredvalue, setEnteredvalue] = useState('');
  const [EnteredValueTouched, setEnteredValueTouched] = useState(false);
  const EnteredValueIsValid = value(Enteredvalue);
  const EnteredValueInvalid = !EnteredValueIsValid && EnteredValueTouched;
  const ValueHandler = (event) => {
    setEnteredvalue(event.target.value);
  };

  const Blur = () => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredvalue('');
    setEnteredValueTouched(false);
  };
  return {
    value: Enteredvalue,
    isvalid: EnteredValueIsValid,
    Invalid: EnteredValueInvalid,
    ValueHandler,
    Blur,
    reset,
  };
};

export default useHook;
