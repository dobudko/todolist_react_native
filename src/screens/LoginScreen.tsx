import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import AppButton from '../components/buttons/AppButton'
import { login as loginUser } from '../redux/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  loginInputWrapper: {
    marginTop: 50,
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  loginInput: {
    width: 300,
    height: 100,
    fontSize: 36,
  },
})

const LoginScreen = () => {
  const [login, setLogin] = useState('')

  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.loginInputWrapper}>
        <TextInput
          placeholder="login"
          style={styles.loginInput}
          onChangeText={(userLogin) => setLogin(userLogin)}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          style={styles.loginInput}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
      </View>
      <AppButton
        title="login"
        onPress={() => dispatch(loginUser(login, password))}
      />
    </View>
  )
}

export default LoginScreen
