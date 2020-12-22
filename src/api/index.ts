import * as SecureStore from 'expo-secure-store'

const callApi = async (
  url: string,
  options?: { method?: string; body?: any }
): Promise<{ status: number; payload: any }> => {
  let token
  await SecureStore.getItemAsync('apiToken').then((res) => {
    token = res
  })
  const path = new URL(`http://10.0.2.2:8080/${url}`)
  const requestHeaders: any = {
    'Content-Type': 'application/json',
    authorization: token,
  }

  const response = await fetch(path.toString(), {
    method: options?.method,
    headers: requestHeaders,
    ...(options?.body ? { body: JSON.stringify(options.body) } : {}),
  })
  if (response.ok) {
    return {
      status: response.status,
      payload: await response.json(),
    }
  }
  throw new Error()
}

export default callApi
