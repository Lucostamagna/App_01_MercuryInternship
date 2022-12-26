import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  MarginGlobal: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 16,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  Touchable: {
    marginBottom: -5,
    justifyContent: 'center',
    marginTop: 20,

    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#FDEBD0',
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  Text: {
    padding: 5,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'rgb(99,99,99)',
    marginBottom: 10,
  },
  Img: {
    width: 100,
    height: 100,
    marginTop: 15,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  TextUser: {
    padding: 1,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#17202A',
    marginBottom: 5,
    marginLeft: 10,
  },
  ViewUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Email: {
    fontSize: 10,

    color: 'rgb(99,99,99)',
  },
  Account: {
    backgroundColor: '#FDEBD0',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderRadius: 15,
    marginTop: 20,
  },
  TextAccount: {
    color: 'rgb(99,99,99)',
    fontSize: 15,
    padding: 7,
  },
  AccountText: {
    color: '#424242',
    fontSize: 20,
  },
  AccountContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  TextBalance: {
    color: 'black',
    fontSize: 15,

    padding: 7,
  },
  FriendsContainer: {
marginTop:20,

flexDirection: 'row',
justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FDEBD0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  FriendsName: {
    padding: 1,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#17202A',
    marginBottom: 5,
    marginLeft: 10,
  },
  FriendsEmail: {
    fontSize: 10,

    color: 'rgb(99,99,99)',
  },
  FriendsImage:{
    width: 100,
    height: 100,
    marginTop: 15,
    borderRadius: 50,
    backgroundColor: 'red',
  }
});
