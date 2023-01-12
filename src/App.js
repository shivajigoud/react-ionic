import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {
  setupIonicReact,
  IonApp,
  IonPage,
  IonHeader,
  IonMenu,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import router from './routes/userRouter';
import './style.css';
import FormContextProvider from './context/FormContext';
setupIonicReact();
export default function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <FormContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </FormContextProvider>
      </IonContent>
    </IonApp>
  );
}
