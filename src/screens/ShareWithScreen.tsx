import React, { useEffect } from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { sharingAvailableUsersSelector } from '../redux/selectors'
import { getSharingAvailableUsers, setSharedList } from '../redux/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  userWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  userLoginText: {
    fontSize: 26,
  },
})

const ShareWithScreen = () => {
  const route: any = useRoute()

  const deviceDimensions = useWindowDimensions()

  const { sharingAvailableUsers } = useSelector(sharingAvailableUsersSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSharingAvailableUsers(route.params.listId))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available users to share</Text>
      {sharingAvailableUsers.map((user) => {
        return (
          <View
            key={user.id}
            style={{
              ...styles.userWrapper,
              width: deviceDimensions.width - 40,
            }}
          >
            <Text
              onPress={() => {
                dispatch(setSharedList(user.id, route.params.listId))
              }}
              style={styles.userLoginText}
            >
              {user.login}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

export default ShareWithScreen
