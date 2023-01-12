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
  IonButtons,
  IonMenuButton,
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
import { TOPHEADER } from './constants/titles';
setupIonicReact();
export default function App() {
  return (
    <IonApp>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          This is the menu content.
        </IonContent>
      </IonMenu>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className="ion-text-center">{TOPHEADER}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <FormContextProvider>
            <RouterProvider router={router}></RouterProvider>
          </FormContextProvider>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}
