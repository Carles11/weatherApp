import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'

const City = () => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    imageLayout,
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName="user"
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName="sunrise"
            iconColor={'white'}
            bodyText={'10:46:58am'}
            bodyTextStyles={riseSetText}
          />

          <IconText
            iconName="sunset"
            iconColor={'white'}
            bodyText={'17:28:15pm'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: { flex: 1 },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
  },

  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 30,
    marginLeft: 7.5,
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: { fontSize: 20 },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default City
