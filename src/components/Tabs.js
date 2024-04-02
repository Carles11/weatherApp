import React from 'react'
import { Text } from 'react-native'
import CurrentWeather from '../screens/CurrentWeather.js'
import UpcommingWeather from '../screens/UpcommingWeather.js'
import City from '../screens/City.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: { backgroundColor: 'lightblue' },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
        },
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'tomato' : 'black' }}>Home</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcomming'}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'tomato' : 'black' }}>
              Upcomming
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <UpcommingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'tomato' : 'black' }}>City</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs
