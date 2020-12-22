import { ActionCreator } from 'redux'
import {
  ADD_LIST_REQUESTED,
  DELETE_LIST_REQUESTED,
  EDIT_LIST_REQUESTED,
  GET_SHARING_AVAILABLE_USERS_REQUESTED,
  GET_USER_LISTS_REQUESTED,
  GET_USER_REQUESTED,
  GET_USER_SHARED_LISTS_REQUESTED,
  LOGIN_REQUESTED,
  REGISTER_REQUESTED,
  REMOVE_USER_REQUESTED,
  SET_SHARED_LIST_REQUESTED,
} from '../constants/actionTypes'
import {
  ListsAction,
  ListsType,
  loginRequestAction,
  SharedListsAction,
  userAction,
} from './types'

export const getUser: ActionCreator<userAction> = () => ({
  type: GET_USER_REQUESTED,
})

export const login: ActionCreator<loginRequestAction> = (
  userLogin: string,
  password: string
) => ({
  type: LOGIN_REQUESTED,
  payload: {
    login: userLogin,
    password,
  },
})

export const register: ActionCreator<loginRequestAction> = (
  userLogin: string,
  password: string
) => ({
  type: REGISTER_REQUESTED,
  payload: {
    login: userLogin,
    password,
  },
})

export const removeUser: ActionCreator<userAction> = () => ({
  type: REMOVE_USER_REQUESTED,
})

export const getUserLists: ActionCreator<ListsAction> = () => ({
  type: GET_USER_LISTS_REQUESTED,
})

export const addList: ActionCreator<ListsAction> = (title: string) => ({
  type: ADD_LIST_REQUESTED,
  payload: {
    id: '',
    title,
    userId: '',
  },
})

export const deleteList: ActionCreator<ListsAction> = (id: string) => ({
  type: DELETE_LIST_REQUESTED,
  payload: id,
})

export const editList: ActionCreator<ListsAction> = (list: ListsType) => ({
  type: EDIT_LIST_REQUESTED,
  payload: list,
})

export const getUserSharedLists: ActionCreator<ListsAction> = () => ({
  type: GET_USER_SHARED_LISTS_REQUESTED,
})

export const getSharingAvailableUsers: ActionCreator<ListsAction> = (
  listId: string
) => ({
  type: GET_SHARING_AVAILABLE_USERS_REQUESTED,
  payload: listId,
})

export const setSharedList: ActionCreator<SharedListsAction> = (
  userId: string,
  listId: string
) => ({
  type: SET_SHARED_LIST_REQUESTED,
  payload: {
    userId,
    listId,
  },
})
