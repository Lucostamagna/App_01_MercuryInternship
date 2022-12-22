import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import User from '../screens/User';
import Transactions from '../screens/Transactions';
import  Friends  from '../screens/Friends';
import HomePage from '../screens/HomePage';
import { Account } from '../components/Account';

export type RootStackParams={
  
  HomePage:undefined,
  User:{ name: string, email: string }
  Friends: { name: string, email: string }
  Transactions: {type: string, amount: number, account: string, fromAccount: string, toAccount: string}


}
const Stack = createStackNavigator<RootStackParams>();

const StackNavigator =()=> {
  return (
    <Stack.Navigator
     screenOptions={{
      headerStyle:{
        elevation:0,
        shadowColor:'transparent'
      },
      cardStyle:{
        backgroundColor:'blue'
      }
     }}
     
    >
     
      <Stack.Screen name="HomePage" options={{ title:"HomePage"}}  component={HomePage} />
      <Stack.Screen name="User"   component={User} />
      <Stack.Screen name="Transactions"options={{ title:"Transactions"}}  component={ Transactions} />  
      <Stack.Screen name="Friends"  component={Friends} /> 
    </Stack.Navigator>
  );
}
export default StackNavigator