import React, { useEffect } from 'react'
import StackNavigator from '../navigator/StackNavigator'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{};

const HomePage = ({navigation}: Props ) => {
  return (
    <View >
      <Text> pagina pricipal</Text>
    
    <TouchableOpacity
     onPress={ ()=> navigation.navigate('User', {
      name:'John Doe',
      email:'johndoe@gmail.com'
     })}
    >
      <Text>Pedro</Text>
    </TouchableOpacity>


 




    </View>
  )
}

export default HomePage

