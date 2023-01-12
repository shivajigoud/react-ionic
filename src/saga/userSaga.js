import { takeEvery, call, put } from '@redux-saga/core/effects';
import userAPI from '../restAPI/userAPI';
import {
  FETCH_ALL_USERS,
  FETCH_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  PUT_FETCH_ALL_USERS,
  PUT_FETCH_USER,
  PUT_CREATE_USER,
  PUT_UPDATE_USER,
  PUT_DELETE_USER,
  PUT_ERROR,
} from '../actions/actions';

function* fetchAllUsers() {
  const { response, error } = yield call(userAPI.fetchAllUsers);
  if (response.status == 200) {
    const users = yield response.json();
    yield put({ type: PUT_FETCH_ALL_USERS, payLoad: users });
    console.log(users);
  } else {
    yield put({
      type: PUT_ERROR,
      payLoad: 'There is an error occured while fetching users list',
    });
  }
}
function* createUser(userAction) {
  const { response, error } = yield call(userAPI.createUser);
  if (response.status == 200) {
    const users = yield response.json();
    yield put({ type: PUT_FETCH_ALL_USERS, payLoad: users });
    console.log(users);
  } else {
    yield put({
      type: PUT_ERROR,
      payLoad:
        'There is an error occured while creating users on server. But added in client side temporarily',
    });
    yield put({
      type: PUT_CREATE_USER,
      payLoad: { [userAction.payLoad.id]: userAction.payLoad },
    });
  }
}
function* updateUser(userAction) {
  // const [id, ...user] = userAction.payLoad;
  const { response, error } = yield call(
    userAPI.updateUser,
    userAction.payLoad.id,
    userAction.payLoad
  );
  if (response.status == 200) {
    const users = yield response.json();
    yield put({ type: PUT_FETCH_ALL_USERS, payLoad: users });
    console.log(users);
  } else {
    yield put({
      type: PUT_ERROR,
      payLoad: 'There is an error occured while fetching users list',
    });
    yield put({
      type: PUT_UPDATE_USER,
      payLoad: { [userAction.payLoad.id]: userAction.payLoad },
    });
  }
}
function* deleteUser(userAction) {
  const { response, error } = yield call(userAPI.deleteUser);
  if (response.status == 200) {
    const users = yield response.json();
    yield put({ type: PUT_FETCH_ALL_USERS, payLoad: users });
    console.log(users);
  } else {
    yield put({
      type: PUT_ERROR,
      payLoad: 'There is an error occured while fetching users list',
    });
    yield put({
      type: PUT_DELETE_USER,
      payLoad: userAction.payLoad,
    });
  }
}
function* fetchUser(userAction) {
  const { response, error } = yield call(userAPI.fetchUser);
  if (response.status == 200) {
    const users = yield response.json();
    yield put({ type: PUT_FETCH_ALL_USERS, payLoad: users });
    console.log(users);
  } else {
    yield put({
      type: PUT_ERROR,
      payLoad: 'There is an error occured while fetching users list',
    });
    yield put({
      type: PUT_FETCH_USER,
      payLoad: userAction.payLoad,
    });
  }
}
export default function* userSaga() {
  yield takeEvery(FETCH_ALL_USERS, fetchAllUsers);
  yield takeEvery(CREATE_USER, createUser);
  yield takeEvery(UPDATE_USER, updateUser);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeEvery(FETCH_USER, fetchUser);
}
