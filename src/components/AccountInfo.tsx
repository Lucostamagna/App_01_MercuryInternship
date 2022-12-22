import { View, Text } from 'react-native';
import { Account } from './Account';





type accountsProps = {
    accounts: {
         type: string;
         balance: number;
    }[];
};
export function AccountsInfo({ accounts }: accountsProps) {
    return (
         <View >
              <View >
                   <Text >Account</Text>
                   <Text >Balance</Text>
              </View>
              {accounts.map((data, index) => {
                   return (
                        <View key={index} >
                             <Account account={data.type} />
                             <Text >$ {data.balance}</Text>
                        </View>
                   );
              })}
         </View>
    );
}