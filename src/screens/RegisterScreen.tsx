import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import AppButton from '../components/buttons/AppButton'

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

const RegisterScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.loginInputWrapper}>
        <TextInput placeholder="login" style={styles.loginInput} />
        <TextInput
          placeholder="password"
          secureTextEntry
          style={styles.loginInput}
        />
      </View>
      <AppButton
        title="register"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

export default RegisterScreen
