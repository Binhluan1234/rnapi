import React, {Component} from 'react'
import {
  View,
} from 'react-native'
import { StackNavigator } from 'react-navigation';

import DetailScreen from './src/screen/DetailScreen/DetailScreen';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';

class App2 extends Component {
  render() {
    return <SimpleApp />;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});

export default App2;