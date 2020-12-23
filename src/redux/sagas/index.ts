import { fork } from 'redux-saga/effects'
import userSaga from './user'
import listsSaga from './lists'
import sharedListsSaga from './sharedLists'
import sharingAvailableUsersSaga from './sharingAvailableUsers'
import todosSaga from './todos'

function* sagas() {
  yield fork(userSaga)
  yield fork(listsSaga)
  yield fork(sharedListsSaga)
  yield fork(sharingAvailableUsersSaga)
  yield fork(todosSaga)
}

export default sagas
