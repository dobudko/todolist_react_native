import PushNotification from 'react-native-push-notification'
import LocalNotification from './LocalPushController'

let token

const configure = () => {
  PushNotification.configure({
    onRegister(FcmToken) {
      token = FcmToken.token
      console.log('TOKEN:', token)
    },
    onNotification(notification: any) {
      const { data } = notification
      const { title, body } = data
      LocalNotification(title, body)
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  })
}

export { configure, token }
