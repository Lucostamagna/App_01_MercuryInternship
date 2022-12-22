import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button,View, Text } from 'react-native';
import { styles } from '../theme/appTheme'




interface Props extends StackScreenProps<any, any>{};
const User = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> User</Text>

        <Button
         title="donde ir?"
         onPress={()=> navigation.navigate('Transactions')}
        />
    </View>
  )
}

export default User;
