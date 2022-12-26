import {View, Text} from 'react-native';
import Account from './Account';
import {styles} from '../theme/appTheme';

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
    <View style={styles.TransactionContainer}>
      <View>
        <Text style={styles.TransactionText}>
          {type} : ${amount}
        </Text>
        {account && (
          <Text style={styles.TransactionText}>
            {' '}
            Account: <Account account={account} />{' '}
          </Text>
        )}
        {fromAccount && (
          <Text style={styles.TransactionText}>
            {' '}
            From Account: <Account account={fromAccount} />{' '}
          </Text>
        )}
        {toAccount && (
          <Text style={styles.TransactionText}>
            {' '}
            To Account: <Account account={toAccount} />{' '}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TransactionInfo;
