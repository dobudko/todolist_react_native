import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler'
import CheckButton from '../components/buttons/CheckButton'
import SharedListCover from '../components/SharedListCover'
import { listsSelector, sharedListsSelector } from '../redux/selectors'
import ListCover from '../components/ListCover'
import { getUserLists, getUserSharedLists, addList } from '../redux/actions'
import AddButton from '../components/buttons/AddButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listsTitleText: {
    fontSize: 40,
    marginBottom: 10,
  },
  newListWrapper: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
  },
  newListTitle: {
    fontSize: 50,
    marginRight: 10,
  },
  checkButton: {
    alignItems: 'center',
  },
})

const ListsScreen = () => {
  const [listIsAdding, setListIsAdding] = useState(false)

  const [newListTitle, setNewListTitle] = useState('')

  const deviceDimensions = useWindowDimensions()

  const { lists } = useSelector(listsSelector)

  const { sharedLists } = useSelector(sharedListsSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserLists())
  }, [])

  useEffect(() => {
    dispatch(getUserSharedLists())
  }, [])

  const handleAddList = () => {
    if (newListTitle) {
      dispatch(addList(newListTitle))
      setNewListTitle('')
    }
    setListIsAdding(false)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.listsTitleText}>your lists</Text>
        {listIsAdding ? null : (
          <AddButton onPress={() => setListIsAdding(true)} />
        )}
      </View>
      {lists.map((list) => {
        return <ListCover id={list.id} title={list.title} key={list.id} />
      })}
      {listIsAdding ? (
        <View style={styles.newListWrapper}>
          <TextInput
            onChangeText={(title) => setNewListTitle(title)}
            style={{
              ...styles.newListTitle,
              width: deviceDimensions.width - 120,
            }}
          />
          <View style={styles.checkButton}>
            <CheckButton onPress={() => handleAddList()} />
          </View>
        </View>
      ) : null}
      {sharedLists ? (
        <View>
          <Text style={styles.listsTitleText}>shared lists</Text>
          {sharedLists.map((list) => {
            return (
              <SharedListCover key={list.id} id={list.id} title={list.title} />
            )
          })}
        </View>
      ) : null}
    </ScrollView>
  )
}

export default ListsScreen
