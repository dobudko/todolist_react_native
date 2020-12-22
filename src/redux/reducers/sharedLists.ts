import { GET_USER_SHARED_LISTS_SUCCESSED } from '../../constants/actionTypes'
import { ListsAction, ListsType } from '../types'

const initialState: Array<ListsType> = []

const sharedLists = (
  state = initialState,
  action: ListsAction
): Array<ListsType> => {
  switch (action.type) {
    case GET_USER_SHARED_LISTS_SUCCESSED:
      return [...(action.payload as ListsType[])]

    default:
      return state
  }
}

export default sharedLists
