import React, { useEffect } from 'react'
import StackNavigator from '../navigator/StackNavigator'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any>{};

const HomePage = ({navigation}: Props ) => {
  return (
    <View >
      <Text> pagina pricipal</Text>
    <View>
    <TouchableOpacity
    style={styles.botonUser}
     onPress={ ()=> navigation.navigate('User', {
      name:'John Doe',
      email:'johndoe@gmail.com'
     })}
    >
      <Text>John Doe</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.botonUser}
    onPress={ ()=> navigation.navigate('Transaction', {
      
     })}
    >
      
      <Text>Transaction</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.botonUser}

    onPress={ ()=> navigation.navigate('Friends', {
      
 })}
     
    >
      <Text>Friends</Text>

    </TouchableOpacity>


    </View>
    


 




    </View>
  )
}

export default HomePage

