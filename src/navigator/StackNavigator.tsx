import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from '../screens/ProfileScreen';
import Transactions from '../screens/TransactionsScreen';
import Friends from '../screens/FriendsScreen';
import MyAccount from '../screens/MyAccountScreen';

export type RootStackParams = {
  MyAccount: undefined;
  User: {name: string; email: string};
  Friends: {name: string; email: string};
  Transactions: {
    type: string;
    amount: number;
    account?: string;
    fromAccount?: string;
    toAccount?: string;
  };
};
const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccount"
        options={{title: 'MyAccount'}}
        component={MyAccount}
      />
      <Stack.Screen 
      name="User"
       options={{title: 'User'}} 
       component={User}
        />
      <Stack.Screen
        name="Transactions"
        options={{title: 'Transactions'}}
        component={Transactions}
      />
      <Stack.Screen
        name="Friends"
        options={{title: 'Friends'}}
        component={Friends}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
