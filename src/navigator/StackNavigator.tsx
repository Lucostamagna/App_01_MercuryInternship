import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import User from '../screens/User';
import Transactions from '../screens/Transactions';
import Friends from '../screens/Friends';
import HomePage from '../screens/HomePage';


// export type RootStackParams={
  
//   HomePage:undefined,
//   User:{ name: string, email: string }
//   Transaction: undefined,
//   Friends:undefined,
// }

const Stack = createStackNavigator();

const StackNavigator =()=> {
  return (
    <Stack.Navigator
     screenOptions={{
      headerStyle:{
        elevation:0,
        shadowColor:'transparent'
      },
      cardStyle:{
        backgroundColor:'white'
      }
     }}
     
    >
      <Stack.Screen name="HomePage" options={{ title:"HomePage"}}  component={HomePage} />
      <Stack.Screen name="User"   component={User} />
      <Stack.Screen name="Transactions"options={{ title:"Transactions"}}  component={Transactions} /> 
    </Stack.Navigator>
  );
}
export default StackNavigator