import {
  ADD_TODO_SUCCESSED,
  CLEAR_COMPLETED_SUCCESSED,
  DELETE_TODO_SUCCESSED,
  EDIT_TODO_SUCCESSED,
  GET_LIST_TODOS_SUCCESSED,
} from '../../constants/actionTypes'
import ActionType from '../../types/ActionType'
import TodoType from '../../types/TodoType'

const initialState: Array<TodoType> = []

const sortList = (todoList: Array<TodoType>): Array<TodoType> => {
  const listCopy = [...todoList]
  listCopy.sort((todo, nextTodo) => todo.position - nextTodo.position)
  return listCopy
}

const todos = (state = initialState, action: ActionType): Array<TodoType> => {
  switch (action.type) {
    case GET_LIST_TODOS_SUCCESSED:
      return [...sortList(action.payload as Array<TodoType>)]

    case ADD_TODO_SUCCESSED:
      if (
        state.find((todo) => todo.id === (action.payload as TodoType).id) ||
        state[0].listId !== (action.payload as TodoType).listId
      ) {
        return state
      }
      return [...state, action.payload as TodoType]

    case DELETE_TODO_SUCCESSED:
      return [...state.filter((todo) => todo.id !== action.payload)]

    case EDIT_TODO_SUCCESSED:
      return [
        ...sortList(
          state.map((todo) => {
            if (todo.id === (action.payload as TodoType).id) {
              return action.payload as TodoType
            }
            return todo
          })
        ),
      ]

    case CLEAR_COMPLETED_SUCCESSED:
      if (state[0].listId !== (action.payload as TodoType).id) {
        return state
      }
      return [...state.filter((todo) => !todo.isCompleted)]

    default:
      return state
  }
}

export default todos
