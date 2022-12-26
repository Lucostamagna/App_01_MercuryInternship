import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { View } from 'react-native';
import Data from '../Data.json'
import  FriendsInfo  from '../components/Friends_Info'


interface Props extends StackScreenProps<RootStackParams, 'Friends'> {}
const Friends = () => {
  const {friends} = Data;
  return (
    <View>
      {friends.map(data => {
        return (
          <View>
          <FriendsInfo key={data.email} name={data.name} email={data.email} />
       
          </View>
          );
      })}
    </View>
  );
};
export default Friends;