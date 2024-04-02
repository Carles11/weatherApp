import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData

  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView
      style={[
        wrapper,
        {
          backgroundColor: weatherType[weatherCondition]?.backgroundColor,
        },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text
          style={[tempStyles, { color: weatherType[weatherCondition]?.color }]}
        >{`${temp}°`}</Text>
        <Text
          style={[feels, { color: weatherType[weatherCondition]?.color }]}
        >{`Feels like ${feels_like}°`}</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          messageOneStyles={[
            highLow,
            { color: weatherType[weatherCondition]?.color },
          ]}
          messageTwoStyles={[
            highLow,
            { color: weatherType[weatherCondition]?.color },
          ]}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        messageOneStyles={[
          description,
          { color: weatherType[weatherCondition]?.color },
        ]}
        messageTwoStyles={[
          message,
          { color: weatherType[weatherCondition]?.color },
        ]}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: 'orange' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tempStyles: { color: 'black', fontSize: 48 },
  feels: { color: 'black', fontSize: 30 },
  highLow: { color: 'black', fontSize: 20 },
  highLowWrapper: { flexDirection: 'row' },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: { fontSize: 43 },
  message: { fontSize: 25 },
})
export default CurrentWeather
