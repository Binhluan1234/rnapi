import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import DetailImg from './DetailImg'

class DetailScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.title,
    headerStyle: { backgroundColor: '#EA4D8A' },
    headerTitleStyle: { color: '#FFFFFF', fontSize: 14},
    //header: null //hiden header
  });

  render() {
    const { params } = this.props.navigation.state;
    // alert('Param: '+JSON.stringify(params.item));
    return (
      <View style={styles.container}>
        {/* <Text>ABC</Text> */}
        <DetailImg itemProp = {params.item}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#EA4D8A'
  },
})

export default DetailScreen;