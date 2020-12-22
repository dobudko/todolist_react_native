import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import deleteIcon from '../../assets/images/checkIcon.png'

interface CheckButtonProps {
  onPress: () => void
}

const styles = StyleSheet.create({
  appButtonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appButtonImage: {
    width: 40,
    height: 40,
  },
})

const CheckButton = ({ onPress }: CheckButtonProps) => {
  const checkIconUri = Image.resolveAssetSource(deleteIcon).uri
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Image style={styles.appButtonImage} source={{ uri: checkIconUri }} />
    </TouchableOpacity>
  )
}

export default CheckButton
