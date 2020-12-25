import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import DeleteButton from './buttons/DeleteButton'
import { deleteList } from '../redux/actions'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    marginBottom: 10,
  },
  listTitle: {
    padding: 20,
  },
  listTitleText: {
    fontSize: 50,
  },
  deleteButton: {
    alignItems: 'center',
  },
})

interface ListCoverProps {
  id: string
  title: string
}

const ListCover = ({ id, title }: ListCoverProps) => {
  const deviceDimensions = useWindowDimensions()

  const navigation = useNavigation()

  const dispatch = useDispatch()

  return (
    <View style={{ ...styles.container, width: deviceDimensions.width }}>
      <View
        style={{ ...styles.listTitle, width: deviceDimensions.width - 100 }}
      >
        <Text
          numberOfLines={1}
          onPress={() => navigation.navigate('Todolist', { listId: id })}
          onLongPress={() => navigation.navigate('ShareWith', { listId: id })}
          style={styles.listTitleText}
        >
          {title}
        </Text>
      </View>
      <View style={styles.deleteButton}>
        <DeleteButton onPress={() => dispatch(deleteList(id))} />
      </View>
    </View>
  )
}

export default ListCover
