import { ListsType } from '../redux/types'
import TodoType from './TodoType'
import UserType from './UserType'

export default interface AppState {
  user: UserType
  lists: Array<ListsType>
  sharedLists: Array<ListsType>
  sharingAvailableUsers: Array<UserType>
  todos: Array<TodoType>
}
