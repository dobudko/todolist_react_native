import { pushNotifications } from '../services'

const fetchNotification = async (title: string, message: string) => {
  const response = await fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers: {
      Authorization:
        'key=AAAA8dJpJk0:APA91bFHi94EVF-cKMGgAGd-sija8vWQUYMIm4zunKniF-JSM-WD9mDJT4glPpXcjReCYhvyAfEIhV7Hw7WwsvC-ECOqrot7_QZiNghVImyGdShZ7EeZPuLTJInT1DR-dOo9CKA-vEED',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: pushNotifications.token,
      notification: {
        body: message,
        title,
        content_available: true,
        priority: 'high',
      },
      data: {
        body: message,
        title,
        content_available: true,
        priority: 'high',
      },
    }),
  })

  return response
}

export default fetchNotification
