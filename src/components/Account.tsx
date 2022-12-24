import {Text, StyleSheet} from 'react-native';

type accountProps = {
  account: string;
};

const Account = ({account}: accountProps)=> {
  return <Text
   style={{color: 'black'}}>
  {account}</Text>;
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 10,
    fontSize: 16,
  },
});

export default Account;