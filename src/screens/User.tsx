import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button,View, Text } from 'react-native';
import { styles } from '../theme/appTheme'


//esto hay que cambiarlo
interface Props extends StackScreenProps<any,any>{};



const User = ({ route, navigation }: Props) => {
const params=route.params 

useEffect( ()=>{
  navigation.setOptions({
    title:params!.name
  })
}, [])
//cambiar lo del json

  return (
    <View style={styles.globalMargin}>
      
        
       <Text style={styles.title}>User
       {
        JSON.stringify(params, null, 3)
       }
       
       </Text>

      
    </View>
  )
}

export default User;
