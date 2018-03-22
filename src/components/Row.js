import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import Item from './Item'

class Row extends Component<{}> {

  render() {
    let itemProps = this.props.itemProps;
    return (
      <View style={styleRow.Row}>
        <View style={styleRow.item}>
          <Item itemProp={itemProps[0]} navigation={this.props.navigation}/>
        </View>
        <View style={styleRow.item}>
          <Item itemProp={itemProps[1]} navigation={this.props.navigation}/>
        </View>
      </View>
    )
  }
}

const styleRow = StyleSheet.create({
  Row: {
    flex: 1,
    flexDirection: 'row',
    padding: 4
  },
  item: {
    flex: 1,
    margin: 4,
  },
})

export default Row

