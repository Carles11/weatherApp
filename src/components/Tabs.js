import React from 'react'
import { Text } from 'react-native'
import CurrentWeather from '../screens/CurrentWeather.js'
import UpcommingWeather from '../screens/UpcommingWeather.js'
import City from '../screens/City.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Current'}
        component={CurrentWeather}
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
      />
      <Tab.Screen
        name={'Upcomming'}
        component={UpcommingWeather}
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
      />
      <Tab.Screen
        name={'City'}
        component={City}
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
      />
    </Tab.Navigator>
  )
}

export default Tabs
