import { takeLatest, call, put } from 'redux-saga/effects'
import fetchNotification from '../../api/notification'
import callApi from '../../api'
import {
  GET_LIST_TODOS_FAILED,
  GET_LIST_TODOS_SUCCESSED,
  ADD_TODO_SUCCESSED,
  ADD_TODO_FAILED,
  DELETE_TODO_SUCCESSED,
  DELETE_TODO_FAILED,
  EDIT_TODO_FAILED,
  EDIT_TODO_SUCCESSED,
  CLEAR_COMPLETED_FAILED,
  CLEAR_COMPLETED_SUCCESSED,
  ADD_TODO_REQUESTED,
  CLEAR_COMPLETED_REQUESTED,
  DELETE_TODO_REQUESTED,
  EDIT_TODO_REQUESTED,
  GET_LIST_TODOS_REQUESTED,
  SET_FILTER_REQUESTED,
  SET_FILTER_SUCCESSED,
} from '../../constants/actionTypes'
import ActionType from '../../types/ActionType'
import TodoType from '../../types/TodoType'

function* getListTodos(action: ActionType) {
  const result = yield call(callApi, `todos/${action.payload}`, {
    method: 'GET',
  })
  if (result.status === 200) {
    yield put({ type: GET_LIST_TODOS_SUCCESSED, payload: result.payload })
  } else {
    yield put({ type: GET_LIST_TODOS_FAILED, payload: result.payload })
  }
}

function* addTodo(action: ActionType) {
  const result = yield call(callApi, 'todos', {
    method: 'POST',
    body: {
      title: (action.payload as TodoType).title,
      position: (action.payload as TodoType).position,
      listId: (action.payload as TodoType).listId,
    },
  })

  if (result.status === 200) {
    yield put({ type: ADD_TODO_SUCCESSED, payload: result.payload })
    yield call(fetchNotification, 'Todolist', 'todo is created')
  } else {
    yield put({ type: ADD_TODO_FAILED, payload: result.payload })
  }
}

function* deleteTodo(action: ActionType) {
  const result = yield call(callApi, `todos/${action.payload}`, {
    method: 'DELETE',
  })
  if (result.status === 200) {
    yield put({ type: DELETE_TODO_SUCCESSED, payload: action.payload })
    yield call(fetchNotification, 'Todolist', 'todo is deleted')
  } else {
    yield put({ type: DELETE_TODO_FAILED, payload: result.payload })
  }
}

function* editTodo(action: ActionType) {
  const result = yield call(
    callApi,
    `todos/${(action.payload as TodoType).id}`,
    {
      method: 'PATCH',
      body: { editedTodo: action.payload },
    }
  )

  if (result.status === 200) {
    yield put({ type: EDIT_TODO_SUCCESSED, payload: result.payload })
    yield call(fetchNotification, 'Todolist', 'todo is edited')
  } else {
    yield put({ type: EDIT_TODO_FAILED, payload: result.payload })
  }
}

function* clearCompleted(action: ActionType) {
  const result = yield call(callApi, `todos/${action.payload}`, {
    method: 'DELETE',
  })

  if (result.status === 200) {
    yield put({ type: CLEAR_COMPLETED_SUCCESSED, payload: result.payload })
  } else {
    yield put({ type: CLEAR_COMPLETED_FAILED, payload: result.payload })
  }
}

function* setFilter(action: ActionType) {
  yield put({ type: SET_FILTER_SUCCESSED, payload: action.payload })
}

export default function* mySaga() {
  yield takeLatest(GET_LIST_TODOS_REQUESTED, getListTodos)

  yield takeLatest(ADD_TODO_REQUESTED, addTodo)

  yield takeLatest(DELETE_TODO_REQUESTED, deleteTodo)

  yield takeLatest(EDIT_TODO_REQUESTED, editTodo)

  yield takeLatest(CLEAR_COMPLETED_REQUESTED, clearCompleted)

  yield takeLatest(SET_FILTER_REQUESTED, setFilter)
}
