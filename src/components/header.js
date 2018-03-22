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
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const data = [
  {
    title: 'Hhih',
    year: '2011',
    posters: {
      thumbnail: 'https://d13yacurqjgara.cloudfront.net/users/1/screenshots/471756/sasquatch.png'
    }
  }
]

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [
        {
          title: 'Hhih',
          year: '2011',
          posters: {
            thumbnail: 'https://d13yacurqjgara.cloudfront.net/users/1/screenshots/471756/sasquatch.png'
          }
        }
      ]
    }
  }

  // if (!this.state.isLoading) {
  //   return this.renderLoadingView();
  // }

  // componentWillMount() {
  //   getMoviesFromApi();
  // }

  // async componentWillMount() {
  //   try {
  //     let response = await fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json');
  //     let responseJson = await response.json();
  //     // alert('Done: '+JSON.stringify(responseJson.movies));
  //     // return responseJson.movies;
  //     this.setState({
  //       isLoading: false,
  //       data: responseJson.movies
  //     }, function() {
  //       alert('Done: '+JSON.stringify(this.state.data));
  //     });
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

  async componentWillMount() {
    try {
      let response = await fetch('https://api.dribbble.com/v1/shots', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer 11857f1e554faa7d640dc7704b31712b777aed6ac191ece39f272981609f3cf3',
        }
      });
      // alert('Cgt: '+JSON.stringify(response));
      let responseJson = await response.json();
      // alert('Done: '+JSON.stringify(responseJson.movies));
      // return responseJson.movies;
      this.setState({
        isLoading: false,
        data: responseJson
      }, function() {
        alert('Done: '+JSON.stringify(this.state.data));
      });
    } catch(error) {
      console.error(error);
    }
  }



  render() {
    var movie = data[0];
    return (
      <View style={styles.container}>
        <Image style={{width: 250, height: 250}}
          source={{uri: movie.posters.thumbnail}} 
        />
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
