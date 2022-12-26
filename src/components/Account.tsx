import {Text,} from 'react-native';
import {styles} from '../theme/appTheme';

type accountProps = {
  account: string;
};

const Account = ({account}: accountProps)=> {
  return <Text
  style={styles.TextAccount}> {account}</Text>;
}

export default Account;