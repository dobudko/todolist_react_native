import PushNotification from 'react-native-push-notification'

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification(notification) {
    console.log('LOCAL NOTIFICATION ==>', notification)
  },
  popInitialNotification: true,
  requestPermissions: true,
})

PushNotification.createChannel(
  {
    channelId: 'my-channel-id',
    channelName: 'My channel',
    channelDescription: 'A channel to categorise your notifications',
    soundName: 'default',
    importance: 4,
    vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`)
)

const LocalNotification = (title: string, message: string) => {
  PushNotification.localNotification({
    channelId: 'my-channel-id',
    bigText: message,
    subText: 'new notification',
    title,
    message,
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
  })
}

export default LocalNotification
