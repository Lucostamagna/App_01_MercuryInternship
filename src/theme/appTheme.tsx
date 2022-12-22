import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 16,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  botonUser: {
    marginTop:15,
    width: '100%',
    height: 50,
    color: 'black',
    backgroundColor: '##FFAB00',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text:{
    color:'#212121',
    fontSize: 20,
  }
});