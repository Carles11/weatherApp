import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const errorComponent = ({ error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry, something went wrong</Text>
      <Text style={styles.errorMessage}>{error}</Text>
      <Feather name={'frown'} size={100} color={'white'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center',
  },
})
export default errorComponent
