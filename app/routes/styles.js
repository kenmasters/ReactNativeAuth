import { Dimensions, StyleSheet } from 'react-native';

let SCREEN = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  centering: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    gray: {
      backgroundColor: '#cccccc',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 8,
    },
  form: {
    width: SCREEN.width * 0.75,
  },
  inputText: {},
  buttonWrapper: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee'
  },
  buttonText: {
    textAlign: 'center'
  }
});
