import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs.js'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useGetWeather } from './src/hooks/useGetWeather.js'
//  api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log({ loading, error, weather })
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={'blue'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
})
export default App
