import AppState from '../../types/AppState'

export function userSelector(state: AppState) {
  return {
    user: state.user,
  }
}

export function listsSelector(state: AppState) {
  return {
    lists: state.lists,
  }
}

export function sharedListsSelector(state: AppState) {
  return {
    sharedLists: state.sharedLists,
  }
}

export function sharingAvailableUsersSelector(state: AppState) {
  return {
    sharingAvailableUsers: state.sharingAvailableUsers,
  }
}

export function todosSelector(state: AppState) {
  return {
    todos: state.todos,
  }
}
