import {View, Text, StyleSheet} from 'react-native';
import {Account} from './Account';

type accountsProps = {
  accounts: {
    type: string;
    balance: number;
  }[];
};
export function AccountsInfo({accounts}: accountsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <Text style={styles.text}>Account</Text>
        <Text style={styles.text}>Balance</Text>
      </View>
      {accounts.map((data, index) => {
        return (
          <View key={index} style={styles.account}>
            <Account account={data.type} />
            <Text style={styles.textBalance}>$ {data.balance}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    color: '#424242',
    fontSize: 20,
  },
  account: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  textBalance: {
    color: 'black',
    fontSize: 15,
    paddingBottom: 10,
  },
});
