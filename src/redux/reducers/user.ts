import * as SecureStore from 'expo-secure-store'
import {
  REMOVE_USER_SUCCESSED,
  SET_USER,
  SET_USER_SUCCESSED,
} from '../../constants/actionTypes'
import UserType from '../../types/UserType'
import { userAction } from '../types'

const initialState: UserType = {
  login: '',
}

const user = (state = initialState, action: userAction) => {
  switch (action.type) {
    case SET_USER_SUCCESSED:
      SecureStore.setItemAsync('deadline', Date.now().toLocaleString())
      SecureStore.setItemAsync('apiToken', action.payload?.accessToken || '')
      SecureStore.setItemAsync(
        'refreshToken',
        action.payload?.refreshToken || ''
      )

    // eslint-disable-next-line no-fallthrough
    case SET_USER:
      return { ...state, login: action.payload?.login || null }

    case REMOVE_USER_SUCCESSED:
      SecureStore.deleteItemAsync('apiToken')
      SecureStore.deleteItemAsync('refreshToken')
      SecureStore.deleteItemAsync('deadline')
      return { ...state, login: null }

    default:
      return state
  }
}

export default user
