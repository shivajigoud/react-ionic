import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
export default function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw Error('some error in creating context');
  }
  return context;
}
