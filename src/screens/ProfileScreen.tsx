import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../redux/selectors'
import { removeUser } from '../redux/actions'
import AppButton from '../components/buttons/AppButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  login: {
    width: 150,
    fontSize: 30,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 10,
  },
})

const ProfileScreen = () => {
  const { user } = useSelector(userSelector)
  const { login } = user

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../assets/images/userLogo.png')}
      />
      <Text style={styles.login}>{login}</Text>
      <AppButton onPress={() => dispatch(removeUser())} title="logout" />
    </View>
  )
}

export default ProfileScreen
