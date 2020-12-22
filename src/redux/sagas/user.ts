import { takeLatest, call, put } from 'redux-saga/effects'
import callApi from '../../api'
import {
  GET_USER_REQUESTED,
  LOGIN_REQUESTED,
  REGISTER_REQUESTED,
  REMOVE_USER_REQUESTED,
  REMOVE_USER_SUCCESSED,
  SET_USER,
  SET_USER_FAILED,
  SET_USER_SUCCESSED,
} from '../../constants/actionTypes'
import { loginRequestAction } from '../types'

function* login(action: loginRequestAction) {
  const result = yield call(callApi, 'user/login', {
    method: 'POST',
    body: {
      login: action.payload.login,
      password: action.payload.password,
    },
  })
  if (result.status === 200) {
    yield put({ type: SET_USER_SUCCESSED, payload: result.payload })
  } else {
    yield put({ type: SET_USER_FAILED, payload: result.payload })
  }
}

function* register(action: loginRequestAction) {
  const result = yield call(callApi, 'user/register', {
    method: 'POST',
    body: {
      login: action.payload.login,
      password: action.payload.password,
    },
  })

  if (result.status === 200) {
    yield put({ type: SET_USER_SUCCESSED, payload: result.payload })
  } else {
    yield put({ type: SET_USER_FAILED, payload: result.payload })
  }
}

function* getUser() {
  const result = yield call(callApi, 'user', {
    method: 'GET',
  })
  if (result.status === 200) {
    yield put({ type: SET_USER, payload: result.payload })
  } else {
    yield put({ type: SET_USER_FAILED, payload: result.payload })
  }
}

function* removeUser() {
  yield put({ type: REMOVE_USER_SUCCESSED })
}

export default function* mySaga() {
  yield takeLatest(LOGIN_REQUESTED, login)

  yield takeLatest(REGISTER_REQUESTED, register)

  yield takeLatest(REMOVE_USER_REQUESTED, removeUser)

  yield takeLatest(GET_USER_REQUESTED, getUser)
}
