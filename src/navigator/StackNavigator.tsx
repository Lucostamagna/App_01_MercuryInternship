import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import User from '../screens/User';
import Transactions from '../screens/Transactions';
import Friends from '../screens/Friends';


const Stack = createStackNavigator();

const StackNavigator =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="Friends" component={Friends} />
    </Stack.Navigator>
  );
}
export default StackNavigator