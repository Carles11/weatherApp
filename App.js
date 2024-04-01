import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs.js'

const App = () => {
  return (
    <NavigationContainer
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      }}
    >
      <Tabs />
    </NavigationContainer>
  )
}

export default App
