import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import Data from '../Data.json'
import { Button,View, Text } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Account } from '../components/Account';
import { AccountsInfo } from '../components/AccountInfo';

type userProps = {
  name: string;
  email: string;
  accounts: {
       type: string;
       balance: number;
  }[];
};


interface Props extends StackScreenProps<RootStackParams,'User'>{};
const { name, email, accounts }: userProps = Data.user;

const User = ({ route, navigation }: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
       {name} {email} 
      </Text>
      <AccountsInfo accounts={accounts} />
      
    </View>
  );
}

export default User;
