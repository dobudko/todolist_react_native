import { combineReducers } from 'redux'
import user from './user'
import lists from './lists'
import sharedLists from './sharedLists'
import sharingAvailableUsers from './sharingAvailableUsers'
import todos from './todos'

const rootReducer = combineReducers({
  user,
  lists,
  sharedLists,
  sharingAvailableUsers,
  todos,
})

export default rootReducer
