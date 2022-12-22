import {View, Text, StyleSheet} from 'react-native';
import {Account} from './Account';

type transactionProps = {
  type: string;
  amount: number;
  account?: string;
  fromAccount?: string;
  toAccount?: string;
};
export function TransactionInfo({
  type,
  amount,
  account,
  fromAccount,
  toAccount,
}: transactionProps) {
  return (
    <View style={styles.transactions_container}>
      <View>
        <Text style={styles.text}>
          {type} : ${amount}{' '}
        </Text>
        {account && (
          <Text style={styles.text}>
            {' '}
            Account: <Account account={account} />{' '}
          </Text>
        )}
        {fromAccount && (
          <Text style={styles.text}>
            {' '}
            From Account: <Account account={fromAccount} />{' '}
          </Text>
        )}
        {toAccount && (
          <Text style={styles.text}>
            {' '}
            To Account: <Account account={toAccount} />
          </Text>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  transactions_container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
    marginBottom: 10,
    borderRadius: 8,
    width: '98%',
    backgroundColor: '#CFD8DC',
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
});
