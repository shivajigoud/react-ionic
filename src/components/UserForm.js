import React, { useState, useEffect } from 'react';
import utils from '../utils/utils';
import { CREATE_USER, UPDATE_USER } from '../actions/actions';
import useForm from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { create, send } from 'ionicons/icons';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';

export default function UserForm({ name, email, gender, status, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState('Add User');
  const [user, setState] = useState({
    name: '',
    email: '',
    gender: '',
    status: '',
    id: utils.getNewID(1200),
  });
  const { formState, setFormState } = useForm();
  const handleChange = (e) => {
    setState({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const userSubmitHandler = (e) => {
    e.preventDefault();
    if (formState.toUpperCase() == 'SAVE') {
      dispatch({ type: UPDATE_USER, payLoad: user });
      navigate('/');
    } else {
      dispatch({ type: CREATE_USER, payLoad: user });
      navigate('/');
    }
  };
  useEffect(() => {
    if (name) {
      setState({ name, email, gender, status, id });
      setPageTitle(`Editing ${name}`);
    }
  }, [name]);
  return (
    <IonCard>
      <IonCardHeader>{pageTitle}</IonCardHeader>
      <IonCardContent>
        <form onSubmit={userSubmitHandler}>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              id="name"
              name="name"
              value={user.name}
              onIonChange={(e) => handleChange(e)}
              placeholder="Name"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              id="email"
              name="email"
              value={user.email}
              onIonChange={(e) => handleChange(e)}
              placeholder="Email"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonRadioGroup
              allow-empty-selection={true}
              value={user.gender ? user.gender : 'male'}
              onIonChange={(e) => handleChange(e)}
              name="gender"
            >
              <IonItem>
                <IonLabel>Male</IonLabel>
                <IonRadio
                  value="male"
                  // checked={user.gender === 'male'}
                  slot="end"
                ></IonRadio>
              </IonItem>
              <IonItem>
                <IonLabel>Female</IonLabel>
                <IonRadio
                  value="female"
                  // checked={user.gender === 'female'}
                  slot="end"
                ></IonRadio>
              </IonItem>
            </IonRadioGroup>
          </IonItem>
          <IonItem>
            <IonLabel>Status</IonLabel>
            <IonSelect
              placeholder="Select Status"
              // onIonChange={(e) => handleChange(e)}
              onIonCancel={(e) => handleChange(e)}
              onIonDismiss={(e) => handleChange(e)}
              name="status"
              value={user.status}
            >
              <IonSelectOption value="active">Active</IonSelectOption>
              <IonSelectOption value="inactive">Inactive</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonButton expand="block" type="submit">
            {formState}
            {formState == 'Save' ? (
              <IonIcon icon={create} slot="end"></IonIcon>
            ) : (
              <IonIcon icon={send} slot="end"></IonIcon>
            )}
          </IonButton>
        </form>
      </IonCardContent>
    </IonCard>
  );
}
