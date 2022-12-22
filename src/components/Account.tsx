import { Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



type accountProps = {
    account: string;
};

export function Account({ account }: accountProps) {
    return (
         <Text
         style={
            account === 'Checking'
                 ? {
                        
                        color: '#3d8ed4',
                   }
                 : account === 'Savings'
                 ? {
                        
                        color: '#3dd456',
                   }
                 : Colors 
       }
         >
              {account}
         </Text>
    );
}
