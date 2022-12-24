import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import Data from '../Data.json'
import {View, Text, BackHandler } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme'
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
      <Text style={{
        color:'black',
        backgroundColor:'#ECEFF1',
        fontSize: 20,
        marginBottom:15

        
      }}>
       {name};       {email} 
      </Text>
      <AccountsInfo accounts={accounts} />
      
      
    </View>
  );
}


export default User;
