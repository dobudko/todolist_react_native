import { fork } from 'redux-saga/effects'
import userSaga from './user'
import listsSaga from './lists'
import sharedListsSaga from './sharedLists'
import sharingAvailableUsersSaga from './sharingAvailableUsers'

function* sagas() {
  yield fork(userSaga)
  yield fork(listsSaga)
  yield fork(sharedListsSaga)
  yield fork(sharingAvailableUsersSaga)
}

export default sagas
