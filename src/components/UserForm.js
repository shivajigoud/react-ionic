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
} from '@ionic/react';

export default function UserForm(
  { name, email, gender, status, id },
  { children }
) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    } else dispatch({ type: CREATE_USER, payLoad: user });
  };
  useEffect(() => {
    if (name) setState({ ...user, name, email, gender, status, id });
  }, [name]);
  return (
    <IonCard>
      <IonCardHeader>Add User</IonCardHeader>
      <IonCardContent>
        <form onSubmit={userSubmitHandler}>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              id="name"
              name="name"
              value={user.name}
              onIonChange={handleChange}
              placeholder="Name"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              id="email"
              name="email"
              value={user.email}
              onIonChange={handleChange}
              placeholder="Email"
            ></IonInput>
          </IonItem>

          <IonRadioGroup value="male" onIonChange={handleChange}>
            <IonItem>
              <IonLabel>Male</IonLabel>
              <IonRadio
                id="male"
                name="gender"
                value="male"
                checked={user.gender === 'male'}
                slot="send"
              ></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Female</IonLabel>
              <IonRadio
                id="female"
                name="gender"
                value="female"
                checked={user.gender === 'female'}
                slot="send"
              ></IonRadio>
            </IonItem>
          </IonRadioGroup>

          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={user.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <IonButton expand="block">
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
