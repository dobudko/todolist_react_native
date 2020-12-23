import { ActionCreator } from 'redux'
import ActionType from '../types/ActionType'
import TodoType from '../types/TodoType'
import {
  ADD_LIST_REQUESTED,
  ADD_TODO_REQUESTED,
  ADD_TODO_SUCCESSED,
  CLEAR_COMPLETED_REQUESTED,
  CLEAR_COMPLETED_SUCCESSED,
  DELETE_LIST_REQUESTED,
  DELETE_TODO_REQUESTED,
  DELETE_TODO_SUCCESSED,
  EDIT_LIST_REQUESTED,
  EDIT_TODO_REQUESTED,
  EDIT_TODO_SUCCESSED,
  GET_LIST_TODOS_REQUESTED,
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
  clearCompletedAction,
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

export const getListTodos: ActionCreator<ActionType> = (id: string) => ({
  type: GET_LIST_TODOS_REQUESTED,
  payload: id,
})

export const addTodo: ActionCreator<ActionType> = (
  title: string,
  position: number,
  listId: string
) => ({
  type: ADD_TODO_REQUESTED,
  payload: {
    id: '',
    title,
    isCompleted: false,
    listId,
    position,
  },
})

export const deleteTodo: ActionCreator<ActionType> = (id: string) => ({
  type: DELETE_TODO_REQUESTED,
  payload: id,
})

export const editTodo: ActionCreator<ActionType> = (todo: TodoType) => ({
  type: EDIT_TODO_REQUESTED,
  payload: todo,
})

export const clearCompleted: ActionCreator<ActionType> = (listId: string) => ({
  type: CLEAR_COMPLETED_REQUESTED,
  payload: listId,
})

export const directlyEditTodo: ActionCreator<ActionType> = (
  editedTodo: TodoType
) => ({
  type: EDIT_TODO_SUCCESSED,
  payload: editedTodo,
})

export const directlyCreateTodo: ActionCreator<ActionType> = (
  createdTodo: TodoType
) => ({
  type: ADD_TODO_SUCCESSED,
  payload: createdTodo,
})

export const directlyDeleteTodo: ActionCreator<ActionType> = (
  todoId: string
) => ({
  type: DELETE_TODO_SUCCESSED,
  payload: todoId,
})

export const directlyClearComplete: ActionCreator<clearCompletedAction> = (
  id: string
) => ({
  type: CLEAR_COMPLETED_SUCCESSED,
  payload: { id },
})
