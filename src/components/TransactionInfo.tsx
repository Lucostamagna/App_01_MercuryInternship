import { View, Text } from 'react-native';
import { AccountsInfo } from './AccountInfo';
import { Account } from './Account';





type transactionProps = {
    type: string;
    amount: number;
    account: string;
    fromAccount: string;
    toAccount: string;
};
export function TransactionInfo({
    type,
    amount,
    account,
    fromAccount,
    toAccount,
}: transactionProps) {
    return (
         <View>
              
              <View >
                   <Text>
                        {type} ${amount}
                   </Text>
                   {account && (
                        <Text>
                             Account: <Account account={account} />
                        </Text>
                   )}
                   {fromAccount && (
                        <Text >
                             From Account: <Account account={fromAccount} />
                        </Text>
                   )}
                   {toAccount && (
                        <Text >
                             To Account: <Account  account ={toAccount} />
                        </Text>
                   )}
              </View>
         </View>
    );
}
