import React from 'react'
import {  Text, View, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any> {}

const HomePage = ({navigation}: Props) => {
  return (
    <View>
      <Text style={{
        color:'#546E7A',
        fontSize: 20,
      }}> ...Welcome User!</Text>
      <View>
        <TouchableOpacity
          style={styles.botonUser}
          onPress={() =>
            navigation.navigate('User', {
              name: 'John Doe',
              email: 'johndoe@gmail.com',
            })
          }>
          <Text style={styles.text}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonUser}
          onPress={() => navigation.navigate('Transactions', {})}>
          <Text style={styles.text}>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonUser}
          onPress={() => navigation.navigate('Friends', {})}>
          <Text style={styles.text}>Friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage

