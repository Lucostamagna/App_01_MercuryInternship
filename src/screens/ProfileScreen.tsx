import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import Data from '../Data.json';
import {View, Text, Image} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';
import {AccountsInfo} from '../components/Account_Info';

type userProps = {
  name: string;
  email: string;
  accounts: {
    type: string;
    balance: number;
  }[];
};

const User = ({navigation}: StackScreenProps<RootStackParams, 'User'>) => {
  const {name, email, accounts}: userProps = Data.user;

  return (
    <View style={styles.MarginGlobal}>
      <View style={styles.ViewUser}>
        <Image source={require('../../assets/Avatar.jpg')} style={styles.Img} />
        <Text style={styles.TextUser}>Hi! {name} </Text>
        <Text style={styles.Email}>[{email}]</Text>
      </View>
      <View style={styles.Account}>
        <AccountsInfo accounts={accounts} />
      </View>
    </View>
  );
};

export default User;
