import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AppButton from '../components/buttons/AppButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 26,
  },
  welcomeTextWrapper: {
    marginTop: 100,
    marginBottom: 100,
  },
  buttonWrapper: {
    width: 150,
    marginBottom: 50,
    textAlign: 'center',
    color: 'black',
  },
  appTitleWrapper: {
    width: 250,
  },
  appTitle: {
    alignSelf: 'center',
    fontSize: 70,
    color: '#b5dcee',
  },
})

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextWrapper}>
        <Text style={styles.welcomeText}>Welcome!</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <AppButton
          title="register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <AppButton title="login" onPress={() => navigation.navigate('Login')} />
      </View>
      <View style={styles.appTitleWrapper}>
        <Text style={styles.appTitle}>todolist</Text>
      </View>
    </View>
  )
}

export default HomeScreen
