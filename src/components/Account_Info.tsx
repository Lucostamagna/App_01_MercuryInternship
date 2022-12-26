import {View, Text} from 'react-native';
import Account from './Account';
import {styles} from '../theme/appTheme';

type accountsProps = {
  accounts: {
    type: string;
    balance: number;
  }[];
};
export function AccountsInfo({accounts}: accountsProps) {
  return (
    <View>
      <View style={styles.AccountContainer}>
        <Text style={styles.AccountText} >Account</Text>
        <Text style={styles.AccountText}>Balance</Text>
      </View>
      {accounts.map((data, index) => {
        return (
          <View key={index} style={styles.AccountContainer} >
            <Account account={data.type} />
            <Text style={styles.TextBalance} >$ {data.balance}</Text>
          </View>
        );
      })}
    </View>
  );
}


