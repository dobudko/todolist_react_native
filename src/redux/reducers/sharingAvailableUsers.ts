import {
  GET_SHARING_AVAILABLE_USERS_SUCCESSED,
  SET_SHARED_LIST_SUCCESSED,
} from '../../constants/actionTypes'
import UserType from '../../types/UserType'
import { sharingAvailableUserAction } from '../types'

const initialState: Array<UserType> = []

const sharedLists = (
  state = initialState,
  action: sharingAvailableUserAction
): Array<UserType> => {
  switch (action.type) {
    case GET_SHARING_AVAILABLE_USERS_SUCCESSED:
      return [...(action.payload as UserType[])]

    case SET_SHARED_LIST_SUCCESSED:
      return [...state.filter((user) => user.id !== action.payload)]

    default:
      return state
  }
}

export default sharedLists
