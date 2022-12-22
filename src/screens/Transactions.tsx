import React from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme'
import Data from '../Data.json'



const Transactions = () => {
  const { transactions } = Data
  return (
    <View>
        <Text style={styles.title}> Transactions</Text>
    
     <TouchableOpacity

     >



     </TouchableOpacity>
    
    
    
    </View>
  )
}

export default Transactions;