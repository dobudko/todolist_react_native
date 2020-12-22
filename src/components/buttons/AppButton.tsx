import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

interface AppButtonProps {
  title: string
  onPress: () => void
}

const styles = StyleSheet.create({
  appButtonContainer: {
    width: 150,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  appButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: '#000',
  },
})

const AppButton = ({ onPress, title }: AppButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

export default AppButton
