import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text> Current Weather</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 4</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOne="Hight: 8"
          messageTwo="Low: 6"
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOne="It´s sunny"
        messageTwo={weatherType['Thunderstorm'].message}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: 'orange' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  temp: { color: 'black', fontSize: 48 },
  feels: { color: 'black', fontSize: 30 },
  highLow: { color: 'black', fontSize: 20 },
  highLowWrapper: { flexDirection: 'row' },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: { fontSize: 48 },
  message: { fontSize: 30 },
})
export default CurrentWeather
