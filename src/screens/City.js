import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'

const City = ({ weatherData }) => {
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

  const { name, country, population, sunrise, sunset } = weatherData
  console.log({ name, country, population, sunrise, sunset })
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/san-cristobal-santiago.jpg')}
        style={imageLayout}
      >
        <View style={styles.centeredContent}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName="user"
              iconColor={'pink'}
              bodyText={`Population: ${population}`}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName="sunrise"
              iconColor={'white'}
              bodyText={moment(sunrise).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            />

            <IconText
              iconName="sunset"
              iconColor={'white'}
              bodyText={moment(sunset).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLayout: { flex: 1 },
  cityName: {
    fontSize: 40,
    paddingTop: 30,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
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
