import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as SecureStore from 'expo-secure-store'
import Navigator from './screens/Navigator'
import callApi from './api'
import { milis, seconds, timeForUpdate } from './constants/time'
import { getUser } from './redux/actions'

const App = () => {
  const dispatch = useDispatch()

  const updateToken = async () => {
    SecureStore.getItemAsync('deadline').then((res) => {
      if (res) {
        const deadline = res.split(',').join('')
        if (deadline && parseInt(deadline, 10) + timeForUpdate < Date.now()) {
          callApi('refresh', {
            method: 'POST',
            body: { refreshToken: window.localStorage.getItem('refreshToken') },
          }).then((promise) => {
            if (promise.payload) {
              SecureStore.setItemAsync('deadline', Date.now().toLocaleString())
              SecureStore.setItemAsync('apiToken', promise.payload.accessToken)
              SecureStore.setItemAsync(
                'refreshToken',
                promise.payload.refreshToken
              )
            }
          })
        }
      }
    })
  }

  useEffect(() => {
    dispatch(getUser())

    updateToken()
    const intervalID = setInterval(() => updateToken(), seconds * milis)

    return () => {
      clearInterval(intervalID)
    }
  })

  return <Navigator />
}

export default App
