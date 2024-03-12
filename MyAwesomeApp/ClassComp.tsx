import { Text, View, useColorScheme } from 'react-native'
import React, { Component } from 'react'

interface MyProps {
    name:string,
    email:string,
    age:number,
}

export class ClassComp extends Component<MyProps>  {
    
  render() {
    return (
      <View>
        <Text>ClassComp</Text>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

export default ClassComp