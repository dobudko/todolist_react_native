import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Some Changes</Text>
    </View>
  )
}

export default App
