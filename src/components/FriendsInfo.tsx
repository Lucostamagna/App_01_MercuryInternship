import { View, Text } from 'react-native';





type friendProps = {
    name: string;
    email: string;
};

export function FriendsInfo({ name, email }: friendProps) {
    return (
         <View key={email} >
              <Text > {name} </Text>
              <Text > {email} </Text>
         </View>
    );
}