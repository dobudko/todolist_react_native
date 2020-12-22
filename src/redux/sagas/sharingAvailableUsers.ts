import { call, put, takeLatest } from 'redux-saga/effects'
import callApi from '../../api'
import {
  GET_SHARING_AVAILABLE_USERS_FAILED,
  GET_SHARING_AVAILABLE_USERS_REQUESTED,
  GET_SHARING_AVAILABLE_USERS_SUCCESSED,
} from '../../constants/actionTypes'
import { ListsAction } from '../types'

function* getSharingAvailableUsers(action: ListsAction) {
  const result = yield call(
    callApi,
    `sharingAvailableUsers/${action.payload}`,
    { method: 'GET' }
  )

  if (result.status === 200) {
    yield put({
      type: GET_SHARING_AVAILABLE_USERS_SUCCESSED,
      payload: result.payload,
    })
  } else {
    yield put({
      type: GET_SHARING_AVAILABLE_USERS_FAILED,
      payload: result.payload,
    })
  }
}

export default function* mySaga() {
  yield takeLatest(
    GET_SHARING_AVAILABLE_USERS_REQUESTED,
    getSharingAvailableUsers
  )
}
