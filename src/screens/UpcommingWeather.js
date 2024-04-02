import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native'
import ListItem from '../components/ListItem'

const Empty = () => {
  return (
    <View>
      <Text>No items here!</Text>
    </View>
  )
}

const UpcommingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    )
  }

  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcomming-background.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: 'red', height: 2 }} />
          )}
          ListEmptyComponent={<Empty />}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  },
})
export default UpcommingWeather
