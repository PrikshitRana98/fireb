import { View, Text } from 'react-native'
import React, { useReducer } from 'react'

interface MyState{
    count:number
}

const initialState:MyState={
    count:0
}

type Action={
    type:'INCREMENT'|'DECREAMENT'
}



const Reducereg = () => {
    const [state,dispatch]=useReducer()
  return (
    <View>
      <Text>Reducereg</Text>
    </View>
  )
}

export default Reducereg