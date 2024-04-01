import React, { useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs.js'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import * as Location from 'expo-location'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  if (!loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    )
  }

  useEffect(() => {
    const setCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    }

    const result = setCurrentLocation()
      // make sure to catch any error
      .catch(console.error)

    // what will be logged to the console?
    console.log({ result })
  }, [])

  if (location) {
    console.log('{ location }', location)
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
})
export default App
