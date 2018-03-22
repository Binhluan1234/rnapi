import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
}
  from 'react-native'

class DetailImg extends Component<{}> {

  render() {
    
    let item = this.props.itemProp;
    return (
      <View style={styleItem.body}>
        <Image style={styleItem.imgStyle}
          source={{ uri: item.imagesNormal }}
        />
        <View style={styleItem.userStyle}>
          <View style={styleItem.avatar}>
          <Image style={styleItem.avaStyle}
            source={{ uri: item.avatar }}
          />
          </View>
          <View style={styleItem.info}>
            <Text style={styleItem.titleStype}>{item.title}</Text>
            <Text style={styleItem.userName}>{item.username}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default DetailImg;

const styleItem = StyleSheet.create({

  body: {
    flex: 1,
    // flexDirection: 'row'
    // margin: 4
  },
  imgStyle: {
    // width: 100,
    // margin: 4,
    height: 200,
    alignSelf: 'stretch',
    // borderColor: '#7DCBC5',
    // borderRadius: 6,
    // borderWidth: 1,
  },
  userStyle: {
    // margin: 4,
    // flex: 1,
    padding: 2,
    flexDirection: 'row',
    backgroundColor: '#42f4e2'
    // borderColor: '#696FAD',
    // borderWidth: 1
  },
  titleStype: {
    color: '#696FAD',
    fontSize: 14,
    fontWeight: 'bold',
    // flex: 1,
    flexWrap: 'wrap',
    margin: 2,
  },
  avaStyle: {
    width: 34,
    height: 34,
    borderColor: '#7DCBC5',
    borderRadius: 17,
    borderWidth: 1,
  },
  info: {
    flex: 8,
    flexDirection: 'column',
    // borderColor: '#696FAD',
    // borderWidth: 1
  },
  avatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 10,
    margin: 2
  }
})