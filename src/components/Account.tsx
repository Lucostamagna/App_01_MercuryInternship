import {Text, StyleSheet} from 'react-native';

type accountProps = {
  account: string;
};

export function Account({account}: accountProps) {
  return (
    <Text
      style={
        account === 'Checking'
          ? {
              ...styles.text,
              color: '#D50000',
            }
          : account === 'Savings'
          ? {
              ...styles.text,
              color: '#C6FF00',
            }
          : styles.text
      }>
      {account}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 10,
    fontSize: 16,
  },
});
