import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather.js'
import UpcommingWeather from './src/screens/UpcommingWeather.js'
import City from './src/screens/City.js'
const App = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <CurrentWeather /> */}
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
})
export default App
