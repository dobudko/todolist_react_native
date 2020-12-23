import TodoType from './TodoType'

export default interface ActionType {
  type: string
  payload?: TodoType | Array<TodoType> | string
}
