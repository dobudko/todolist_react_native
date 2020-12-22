import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import deleteIcon from '../../assets/images/addIcon.png'

interface AddButtonProps {
  onPress: () => void
}

const styles = StyleSheet.create({
  appButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  appButtonImage: {
    width: 40,
    height: 40,
  },
})

const AddButton = ({ onPress }: AddButtonProps) => {
  const addIconUri = Image.resolveAssetSource(deleteIcon).uri
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Image style={styles.appButtonImage} source={{ uri: addIconUri }} />
    </TouchableOpacity>
  )
}

export default AddButton
