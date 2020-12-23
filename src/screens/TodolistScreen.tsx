import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput, useWindowDimensions } from 'react-native'
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist'
import { useDispatch, useSelector } from 'react-redux'
import TodoType from '../types/TodoType'
import { todosSelector } from '../redux/selectors'
import {
  getListTodos,
  editTodo,
  directlyEditTodo,
  addTodo,
} from '../redux/actions'
import Todo from '../components/Todo'
import CheckButton from '../components/buttons/CheckButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addNewTodo: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  addNewTodoTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})

const TodolistScreen = () => {
  const [newTodoTitle, setNewTodoTitle] = useState('')

  const deviceDimensions = useWindowDimensions()

  const route: any = useRoute()

  const dispatch = useDispatch()

  const { todos } = useSelector(todosSelector)

  useEffect(() => {
    dispatch(getListTodos(route.params.listId))
  }, [])

  const editTodoTitle = (id: string, newTitle: string) => {
    const editedTodo = todos.filter((todo) => todo.id === id)[0]
    editedTodo.title = newTitle
    dispatch(editTodo(editedTodo))
  }

  const changeTodoStatus = (id: string) => {
    const editedTodo = todos.filter((todo) => todo.id === id)[0]
    editedTodo.isCompleted = !editedTodo.isCompleted
    dispatch(editTodo(editedTodo))
  }

  const renderItem = ({ item, drag, isActive }: RenderItemParams<TodoType>) => {
    return (
      <Todo
        id={item.id}
        title={item.title}
        isCompleted={item.isCompleted}
        drag={drag}
        isActive={isActive}
        editTodoTitle={editTodoTitle}
        changeTodoStatus={changeTodoStatus}
      />
    )
  }

  const changePosition = (from: number, to: number) => {
    const editedTodo = todos[from]
    if (from < to) {
      if (todos[to + 1]) {
        editedTodo.position = (todos[to + 1].position + todos[to].position) / 2
      } else {
        editedTodo.position = todos[to].position + 1
      }
    } else if (todos[to - 1]) {
      editedTodo.position = (todos[to - 1].position + todos[to].position) / 2
    } else {
      editedTodo.position = todos[to].position - 1
    }

    dispatch(directlyEditTodo(editedTodo))
    dispatch(editTodo(editedTodo))
  }

  const createTodo = () => {
    let position
    if (todos.length > 0) {
      const todosCopy = todos.slice()
      position = todosCopy[todos.length - 1].position + 1
    } else {
      position = 1
    }
    dispatch(addTodo(newTodoTitle, position, route.params.listId))
    setNewTodoTitle('')
  }

  return (
    <View style={styles.container}>
      <View
        style={{ ...styles.addNewTodo, width: deviceDimensions.width - 50 }}
      >
        <TextInput
          placeholder="new todo"
          style={{
            ...styles.addNewTodoTitle,
            width: deviceDimensions.width - 120,
          }}
          value={newTodoTitle}
          onChangeText={(title) => setNewTodoTitle(title)}
        />
        <CheckButton onPress={createTodo} />
      </View>
      <DraggableFlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => `draggable-item-${item.id}`}
        onDragEnd={({ from, to }) => changePosition(from, to)}
      />
    </View>
  )
}

export default TodolistScreen
