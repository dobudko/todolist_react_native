import {
  ADD_LIST_SUCCESSED,
  DELETE_LIST_SUCCESSED,
  EDIT_LIST_SUCCESSED,
  GET_USER_LISTS_SUCCESSED,
} from '../../constants/actionTypes'
import { ListsType, ListsAction } from '../types'

const initialState: Array<ListsType> = []

const lists = (state = initialState, action: ListsAction): Array<ListsType> => {
  switch (action.type) {
    case GET_USER_LISTS_SUCCESSED:
      return action.payload as ListsType[]

    case ADD_LIST_SUCCESSED:
      return [...state, action.payload as ListsType]

    case DELETE_LIST_SUCCESSED:
      return [...state.filter((todo) => todo.id !== action.payload)]

    case EDIT_LIST_SUCCESSED:
      return state.map((list) => {
        if (list.id === (action.payload as ListsType).id) {
          return action.payload as ListsType
        }
        return list
      })

    default:
      return state
  }
}

export default lists
