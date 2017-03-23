/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Authentication from '../routes/Authentication';
import Homepage from '../routes/Homepage';
import styles from '../routes/styles';

class App extends Component {
  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true })
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return <ActivityIndicator style={[styles.centering]} />
    }
    
    return (
      <Router>
        <Scene key='root'>
          <Scene
            component={Authentication}
            hideNavBar={true}
            initial={true}
            key='Authentication'
            title='Authentication'
          />
          <Scene
            component={Homepage}
            hideNavBar={true}
            key='HomePage'
            title='Home Page'
          />
        </Scene>
      </Router>
    );
  }
}

export default App;



