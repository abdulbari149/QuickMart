import { useState } from 'react';

const useFormState = <TData extends object>(initialState: TData) => {
  const [state, setState] = useState(initialState);

  const handleChange =
    <TKey extends keyof typeof state>(key: TKey) =>
    <TValue extends (typeof state)[TKey]>(value: TValue) => {
      setState((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    };
  const reset = () => {
    setState(initialState);
  };
  return { values: state, handleChange, reset };
};

export default useFormState;
