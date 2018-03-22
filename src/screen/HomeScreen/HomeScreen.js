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
  ToolbarAndroid,
  Button
} from 'react-native';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';

import Header from '../../components/Header';
import ListImg from '../../components/ListImg';
import reducers from '../../reducers/reducers'

const store = createStore(reducers, applyMiddleware(thunk))

export default class HomeScreen extends Component<{}> {

  static navigationOptions = {
    title: 'dribbble',
    headerStyle: { backgroundColor: '#EA4D8A' },
    headerTitleStyle: { color: '#FFFFFF' },
    // headerRight: (
    //   <Button
    //     title='TestNav'
    //     onPress={() => this.clickBt.bind()}
    //   />
    // ),
  };

  clickBt() {
    alert("A")
    const { navigate } = this.props.navigation;
    navigate('DetailScreen');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/* <ToolbarAndroid style={styles.toolbar}
            title='dribbble'
            titleColor='#FFFFFF'
          /> */}
          <View style={styles.Lists}>
            <ListImg navigation={this.props.navigation}/>
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
