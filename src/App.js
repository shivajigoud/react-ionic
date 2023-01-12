import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';
import router from './routes/userRouter';
import './style.css';
import FormContextProvider from './context/FormContext';
setupIonicReact();
export default function App() {
  return (
    <FormContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </FormContextProvider>
  );
}
