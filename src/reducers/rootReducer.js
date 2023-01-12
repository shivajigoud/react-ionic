import { combineReducers } from '@reduxjs/toolkit';
import { users, usersError } from './userReducer';

export const rootReducer = combineReducers({
  users,
  usersError,
});
