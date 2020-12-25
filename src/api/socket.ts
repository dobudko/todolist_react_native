import * as SecureStore from 'expo-secure-store'
import { io } from 'socket.io-client'

const createSocket = async () => {
  const token = await SecureStore.getItemAsync('apiToken')

  return io('http://10.0.2.2:8080/', {
    auth: {
      token,
    },
  })
}

export default createSocket
