import {
  PUT_FETCH_ALL_USERS,
  PUT_FETCH_USER,
  PUT_CREATE_USER,
  PUT_UPDATE_USER,
  PUT_DELETE_USER,
  PUT_ERROR,
} from '../actions/actions';

export const users = (state = {}, action) => {
  switch (action.type) {
    case PUT_FETCH_ALL_USERS:
      return { ...action.payLoad };
    case PUT_CREATE_USER:
      return { ...state, ...action.payLoad };
    case PUT_UPDATE_USER:
      if (Object.keys(action.payLoad).length) {
        let users = {};
        Object.keys(state).filter((key) => {
          if (state[key]['id'] == Object.keys(action.payLoad)[0]) {
            users[key] = action.payLoad[state[key]['id']];
          } else users[key] = state[key];
        });
        return { ...users };
      } else return state;
    //Below code mutating the state so removed -
    // case PUT_FETCH_USER:
    //   if (action.payLoad) {
    //     let user;
    //     Object.keys(state).filter((key) => {
    //       if (key == action.payLoad) {
    //         user = state[key];
    //         return;
    //       }
    //     });
    //     return { ...user };
    //   } else return state;
    case PUT_DELETE_USER:
      if (action.payLoad) {
        let users = {};
        Object.keys(state).filter((key) => {
          if (key !== action.payLoad) {
            users[key] = state[key];
          }
        });
        return { ...users };
      } else return state;
    default:
      return state;
  }
};
export const usersError = (state = { error: null }, action) => {
  switch (action.type) {
    case PUT_ERROR:
      return { error: action.payLoad };
    default:
      return state;
  }
};
