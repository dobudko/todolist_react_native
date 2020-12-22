import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import deleteIcon from '../../assets/images/deleteIcon.png'

interface DeleteButtonProps {
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

const DeleteButton = ({ onPress }: DeleteButtonProps) => {
  const deleteIconUri = Image.resolveAssetSource(deleteIcon).uri
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Image style={styles.appButtonImage} source={{ uri: deleteIconUri }} />
    </TouchableOpacity>
  )
}

export default DeleteButton
