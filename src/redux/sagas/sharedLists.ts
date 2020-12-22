import { call, put, takeLatest } from 'redux-saga/effects'
import callApi from '../../api'
import {
  GET_USER_SHARED_LISTS_FAILED,
  GET_USER_SHARED_LISTS_REQUESTED,
  GET_USER_SHARED_LISTS_SUCCESSED,
  SET_SHARED_LIST_FAILED,
  SET_SHARED_LIST_REQUESTED,
  SET_SHARED_LIST_SUCCESSED,
} from '../../constants/actionTypes'
import { SharedLists, SharedListsAction } from '../types'

function* getSharedLists() {
  const result = yield call(callApi, 'sharedLists', { method: 'GET' })

  if (result.status === 200) {
    yield put({
      type: GET_USER_SHARED_LISTS_SUCCESSED,
      payload: result.payload,
    })
  } else {
    yield put({ type: GET_USER_SHARED_LISTS_FAILED, payload: result.payload })
  }
}

function* setSharedList(action: SharedListsAction) {
  const result = yield call(callApi, 'sharedLists', {
    method: 'POST',
    body: {
      userId: (action.payload as SharedLists).userId,
      listId: (action.payload as SharedLists).listId,
    },
  })

  if (result.status === 200) {
    yield put({
      type: SET_SHARED_LIST_SUCCESSED,
      payload: (action.payload as SharedLists).userId,
    })
  } else {
    yield put({ type: SET_SHARED_LIST_FAILED, payload: result.payload })
  }
}

export default function* mySaga() {
  yield takeLatest(GET_USER_SHARED_LISTS_REQUESTED, getSharedLists)

  yield takeLatest(SET_SHARED_LIST_REQUESTED, setSharedList)
}
