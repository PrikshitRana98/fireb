import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import Settings from './Settings'

export type RootStackParamsList = {
    Home:undefined,
    Settings:undefined,
}

const Stack =createStackNavigator<RootStackParamsList>()

const Appnavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"Settings"} component={Settings}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Appnavigator