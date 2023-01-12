import React, { createContext, useState } from 'react';

export const FormContext = createContext();
export default function FormContextProvider({ children }) {
  const [formState, setFormState] = useState('Submit');
  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
}
