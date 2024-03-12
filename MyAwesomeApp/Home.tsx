import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from './Appnavigator'
import { TextInput } from 'react-native-gesture-handler'
import { CountProvider, } from './Contexteg'
import Comp from './Comp'

interface HomeProps{
    navigation:StackNavigationProp<RootStackParamsList,"Home">
}

interface User{
  name:String,
  age:number
}

interface Items{
  price:number,
  ListName:String,
  total:number,
}

const Home = ({navigation}:HomeProps) => {
  const [mystate,setMystate]=useState<String>("")

  const [counter,setCounter]=useState<number>(0)
  const [isLoaded,setIsLoaded]=useState<boolean>(false)
  const [myUser,setMyUser]=useState<User>({name:"",age:0})

  const [myArray, setMyArray] = useState<any[]>([]);
  const [items,setItems]=useState<Items[]>([])
  const [details,setDetails]=useState<null>(null)

  const ipref =useRef<TextInput>(null)
  return (
    <CountProvider>
      <View>
      <Text>Home</Text>
      <TextInput ref={ipref}/>
      <TouchableOpacity 
        onPress={()=>{navigation.navigate("Settings")}}
        style={{borderWidth:1, margin:10,padding:10}}><Text style={{color:"black"}}>Go to Setting Page</Text></TouchableOpacity>
    </View>
    <Comp/>
    </CountProvider>
  )
}

export default Home