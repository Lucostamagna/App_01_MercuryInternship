import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme'
import Data from '../Data.json'
import { FriendsInfo } from '../components/FriendsInfo'


interface Props extends StackScreenProps<RootStackParams,'Friends'>{};
const Friends = () => {
   const { friends } = Data;
  return (
      
            
                 <View >
                      {friends.map((data) => {
                           return (
                                <FriendsInfo
                                     key={data.email}
                                     name={data.name}
                                     email={data.email}
                                />
                           );
                      })}
                 </View>
           
       
  );
}
export default Friends