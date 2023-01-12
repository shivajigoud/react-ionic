import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_USER, FETCH_USER, FETCH_ALL_USERS } from '../actions/actions';
import useForm from '../hooks/useForm';
import { useParams } from 'react-router-dom';
import UserForm from './UserForm';

export default function AddUser() {
  let { id } = useParams();
  const users = useSelector((state) => state.users);
  const [currentUser, setCurrentUser] = useState();
  const { formState, setFormState } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (formState.toUpperCase() == 'SAVE' && id) {
      // dispatch({ type: FETCH_USER, payLoad: id });
      Object.keys(users).filter((key) => {
        if (key == id) {
          setCurrentUser(users[key]);
          return;
        }
      });
    }
    return () => {
      setFormState('Submit');
    };
  }, []);
  return <UserForm {...currentUser}></UserForm>;
}
