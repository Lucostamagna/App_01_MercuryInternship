import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const MyAccount= ({navigation}: Props) => {
  return (
   
      
      <View>
        <TouchableOpacity
          style={styles.botonUser}
          onPress={() =>
            navigation.navigate('User', {})}>
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
   
  );
};

export default MyAccount;
