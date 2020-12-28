import 'react-native-gesture-handler'
import React, { RefObject, useRef } from 'react'
import { NavigationContainer, NavigationState } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import * as firebase from 'react-native-firebase'
import { userSelector } from '../redux/selectors'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ProfileScreen from './ProfileScreen'
import ListsScreen from './ListsScreen'
import TodolistScreen from './TodolistScreen'
import ShareWithScreen from './ShareWithScreen'

type RootStackParamList = {
  Home: undefined
  Profile: undefined
  Register: undefined
  Login: undefined
  Lists: undefined
  Todolist: { listId: string }
  ShareWith: { listId: string }
  Example: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const Navigator = () => {
  const routeNameRef = useRef()
  const navigationRef: RefObject<any> = useRef()

  const { user } = useSelector(userSelector)
  const { login } = user

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current
        const currentRouteName = navigationRef.current.getCurrentRoute().name

        if (previousRouteName !== currentRouteName) {
          firebase.analytics().setCurrentScreen(currentRouteName)
        }
      }}
    >
      <Stack.Navigator>
        {login ? (
          <>
            <Stack.Screen name="Lists" component={ListsScreen} />
            <Stack.Screen name="ShareWith" component={ShareWithScreen} />
            <Stack.Screen name="Todolist" component={TodolistScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
