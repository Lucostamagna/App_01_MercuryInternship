import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import User from '../screens/User';
import Transactions from '../screens/Transactions';
import Friends from '../screens/Friends';


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
      <Stack.Screen name="User" options={{ title:"User"}}   component={User} />
      <Stack.Screen name="Transactions"options={{ title:"Transactions"}}  component={Transactions} />
      <Stack.Screen name="Friends" options={{ title:"Friends"}} component={Friends} />
    </Stack.Navigator>
  );
}
export default StackNavigator