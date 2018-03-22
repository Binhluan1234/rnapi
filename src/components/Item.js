import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
}
  from 'react-native'

class Item extends Component<{}> {

  onPressImg() {
    let item = this.props.itemProp;
    alert('Tittle: ' + item.title
      + '\nID: ' + item.id
      + '\nUser name: ' + item.username);
  }

  render() {
    let item = this.props.itemProp;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity onPress={() => navigate('Detail', { item: {...item} })}>
          <Image style={styleItem.imgStyle}
            source={{ uri: item.images }}
          />
        </TouchableOpacity>
        <View style={styleItem.userStyle}>
          <Image style={styleItem.avaStyle}
            source={{ uri: item.avatar }}
          />
          <Text style={styleItem.titleStype}>{item.title}</Text>
        </View>
      </View>
    )
  }
}

export default Item;

const styleItem = StyleSheet.create({
  imgStyle: {
    // width: 100,
    height: 140,
    alignSelf: 'stretch',
    borderColor: '#7DCBC5',
    borderRadius: 6,
    borderWidth: 1,
  },
  userStyle: {
    marginTop: 4,
    flex: 1,
    flexDirection: 'row',
    // borderColor: '#696FAD',
    // borderWidth: 1
  },
  titleStype: {
    color: '#696FAD',
    // flexWrap: 'wrap',
    fontSize: 12,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 2,
    // marginRight: 4,
  },
  avaStyle: {
    width: 24,
    height: 24,
    borderColor: '#7DCBC5',
    borderRadius: 12,
    borderWidth: 1,
  },
})