import { SET_FILTER_SUCCESSED } from '../../constants/actionTypes'
import { SHOW_ALL } from '../../constants/statuses'
import ActionType from '../../types/ActionType'

const filter = (state = SHOW_ALL, action: ActionType) => {
  switch (action.type) {
    case SET_FILTER_SUCCESSED:
      return action.payload

    default:
      return state
  }
}

export default filter
