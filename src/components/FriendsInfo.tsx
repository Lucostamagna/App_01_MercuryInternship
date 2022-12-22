import { View, Text, StyleSheet } from 'react-native';

type friendProps = {
  name: string;
  email: string;
};

export function FriendsInfo({name, email}: friendProps) {
  return (
    <View key={email} style={styles.container}>
      <Text  style={styles.name}> {name} </Text>
      <Text style={styles.email}> {email} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: '95%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFC400',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#37474F',
  },
  email: {
    paddingLeft: 10,
    fontSize: 16,
    color: '#FCE4EC',
  },
});