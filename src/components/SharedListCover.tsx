import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    marginBottom: 10,
    padding: 20,
  },
  listTitleText: {
    fontSize: 50,
  },
})

interface ListCoverProps {
  id: string
  title: string
}

const SharedListCover = ({ id, title }: ListCoverProps) => {
  const deviceDimensions = useWindowDimensions()

  const navigation = useNavigation()

  return (
    <View style={{ ...styles.container, width: deviceDimensions.width }}>
      <Text
        numberOfLines={1}
        onPress={() => navigation.navigate('Todolist', { listId: id })}
        style={styles.listTitleText}
      >
        {title}
      </Text>
    </View>
  )
}

export default SharedListCover
