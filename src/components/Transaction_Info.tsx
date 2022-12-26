import {View, Text, StyleSheet} from 'react-native';
import Account from './Account';

type transactionProps = {
  type: string;
  amount: number;
  account?: string;
  fromAccount?: string;
  toAccount?: string;
};

const TransactionInfo = ({
  type,
  amount,
  account,
  fromAccount,
  toAccount,
}: transactionProps) => {
  return (
    <View style={{backgroundColor:'red'}}>
      <View>
        <Text>
          {type} : ${amount}
        </Text>
        {account && (
          <Text> Account: <Account account={account} /> </Text>
        )}
        { fromAccount && (
          <Text> From Account: <Account account={fromAccount} /> </Text>
        )}
        {toAccount && (
          <Text> To Account: <Account account={toAccount} /> </Text>
        )}
      </View>
    </View>
  );
};
// const styles = StyleSheet.create({
//   transactions_container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     margin: 3,
//     marginBottom: 10,
//     borderRadius: 8,
//     width: '98%',
//     backgroundColor: '#CFD8DC',
//   },
//   text: {
//     color: 'black',
//     fontSize: 15,
//   },
// });


export default TransactionInfo;