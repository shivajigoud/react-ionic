import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import FormContextProvider from './context/FormContext';
import router from './routes/userRouter';
import './style.css';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
export default function App() {
  return (
    <FormContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </FormContextProvider>
  );
}
