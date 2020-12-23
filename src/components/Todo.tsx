import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native'
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu'
import { useDispatch } from 'react-redux'
import CheckButton from './buttons/CheckButton'
import { deleteTodo } from '../redux/actions'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 10,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  todoTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  menuTrigger: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuOption: {
    width: 150,
    borderRadius: 10,
    padding: 10,
  },
  menuOptionText: {
    fontSize: 22,
  },
})

interface TodoProps {
  id: string
  title: string
  isCompleted: boolean
  // listId: string
  // position: number
  drag: () => void
  isActive: boolean
  editTodoTitle: (id: string, title: string) => void
  changeTodoStatus: (id: string) => void
}

const Todo = ({
  id,
  title,
  isCompleted,
  drag,
  isActive,
  editTodoTitle,
  changeTodoStatus,
}: TodoProps) => {
  const deviceDimensions = useWindowDimensions()

  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const [editedTitle, setEditedTitle] = useState(title)

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: isActive ? '#ccc' : '#fff',
        width: deviceDimensions.width - 50,
      }}
      onLongPress={drag}
      onPress={() => changeTodoStatus(id)}
    >
      {isEditing ? (
        <>
          <TextInput
            autoFocus
            style={{ ...styles.todoTitle, width: deviceDimensions.width - 120 }}
            value={editedTitle}
            onChangeText={(newTitle) => setEditedTitle(newTitle)}
          />
          <View style={{ alignSelf: 'center' }}>
            <CheckButton
              onPress={() => {
                editTodoTitle(id, editedTitle)
                setIsEditing(false)
              }}
            />
          </View>
        </>
      ) : (
        <>
          <Text
            style={{
              ...styles.todoTitle,
              width: deviceDimensions.width - 120,
              textDecorationLine: isCompleted ? 'line-through' : 'none',
            }}
          >
            {title}
          </Text>
          <Menu style={{ width: 40 }}>
            <MenuTrigger
              customStyles={{ triggerText: styles.menuTrigger }}
              text="•••"
            />
            <MenuOptions customStyles={{ optionsContainer: styles.menuOption }}>
              <MenuOption onSelect={() => setIsEditing(true)}>
                <Text style={styles.menuOptionText}>edit</Text>
              </MenuOption>
              <MenuOption onSelect={() => dispatch(deleteTodo(id))}>
                <Text style={styles.menuOptionText}>delete</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </>
      )}
    </TouchableOpacity>
  )
}

export default Todo
