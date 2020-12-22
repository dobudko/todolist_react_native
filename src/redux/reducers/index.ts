import { combineReducers } from 'redux'
import user from './user'
import lists from './lists'
import sharedLists from './sharedLists'
import sharingAvailableUsers from './sharingAvailableUsers'

const rootReducer = combineReducers({
  user,
  lists,
  sharedLists,
  sharingAvailableUsers,
})

export default rootReducer
