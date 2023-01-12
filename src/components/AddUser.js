import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_USER, FETCH_USER, FETCH_ALL_USERS } from '../actions/actions';
import useForm from '../hooks/useForm';
import { useParams } from 'react-router-dom';
import UserForm from './UserForm';

export default function AddUser() {
  return <UserForm></UserForm>;
}
