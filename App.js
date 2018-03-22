/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ToolbarAndroid
} from 'react-native';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import {thunk} from 'redux-thunk';

import Header from './src/components/Header';
import ListImg from './src/components/ListImg';
import reducers from './src/reducers/reducers'

const store = createStore(reducers, applyMiddleware(thunk))

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ToolbarAndroid style={styles.toolbar}
            title='dribbble'
            titleColor='#FFFFFF'
          />
          <View style={styles.Lists}>
            <ListImg />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    flex: 1,
    flexDirection: 'row',
  },
  Lists: {
    flex: 1,
    flexDirection: 'row',
  },
  toolbar: {
    height: 56,
    // width: 150,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#EA4D8A',
  },
});
