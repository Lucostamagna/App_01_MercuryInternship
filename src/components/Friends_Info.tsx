import {View, Text, Image} from 'react-native';
import {styles} from '../theme/appTheme';

type friendProps = {
  name: string;
  email: string;
};

const FriendsInfo = ({name, email}: friendProps) => {
  return (
    <View key={email} style={styles.FriendsContainer}>
      <Image
        style={styles.FriendsImage}
        source={require('../../assets/friends.jpg')}
      />
      <Text style={styles.FriendsName}> {name} </Text>
      <Text style={styles.FriendsEmail}> [{email}] </Text>
    </View>
  );
};

export default FriendsInfo;
