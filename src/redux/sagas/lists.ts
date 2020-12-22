import { call, put, takeLatest } from 'redux-saga/effects'
import callApi from '../../api'
import {
  ADD_LIST_FAILED,
  ADD_LIST_REQUESTED,
  ADD_LIST_SUCCESSED,
  DELETE_LIST_FAILED,
  DELETE_LIST_REQUESTED,
  DELETE_LIST_SUCCESSED,
  EDIT_LIST_FAILED,
  EDIT_LIST_REQUESTED,
  EDIT_LIST_SUCCESSED,
  GET_USER_LISTS_FAILED,
  GET_USER_LISTS_REQUESTED,
  GET_USER_LISTS_SUCCESSED,
} from '../../constants/actionTypes'
import { ListsAction, ListsType } from '../types'

function* getUserLists() {
  const result = yield call(callApi, 'lists', { method: 'GET' })

  if (result.status === 200) {
    yield put({ type: GET_USER_LISTS_SUCCESSED, payload: result.payload })
  } else {
    yield put({ type: GET_USER_LISTS_FAILED, payload: result.payload })
  }
}

function* addList(action: ListsAction) {
  const result = yield call(callApi, 'lists', {
    method: 'POST',
    body: { title: (action.payload as ListsType).title },
  })
  if (result.status === 200) {
    yield put({ type: ADD_LIST_SUCCESSED, payload: result.payload })
  } else {
    yield put({ type: ADD_LIST_FAILED, payload: result.payload })
  }
}

function* editList(action: ListsAction) {
  const result = yield call(
    callApi,
    `lists/${(action.payload as ListsType).id}`,
    {
      method: 'PATCH',
      body: { editedList: action.payload as ListsType },
    }
  )

  if (result.status === 200) {
    yield put({ type: EDIT_LIST_SUCCESSED, paylaod: result.payload })
  } else {
    yield put({ type: EDIT_LIST_FAILED, payload: result.payload })
  }
}

function* deleteList(action: ListsAction) {
  const result = yield call(callApi, `lists/${action.payload}`, {
    method: 'DELETE',
  })

  if (result.status === 200) {
    yield put({ type: DELETE_LIST_SUCCESSED, payload: result.payload.id })
  } else {
    yield put({ type: DELETE_LIST_FAILED, payload: result.payload.id })
  }
}

export default function* mySaga() {
  yield takeLatest(GET_USER_LISTS_REQUESTED, getUserLists)

  yield takeLatest(ADD_LIST_REQUESTED, addList)

  yield takeLatest(EDIT_LIST_REQUESTED, editList)

  yield takeLatest(DELETE_LIST_REQUESTED, deleteList)
}
