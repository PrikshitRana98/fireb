import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from './Appnavigator'

interface SettingProps{
    navigation:StackNavigationProp<RootStackParamsList,"Settings">
}

const Settings = ({navigation}:SettingProps) => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings