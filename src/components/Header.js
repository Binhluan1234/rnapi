import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

class Header extends Component<{}> {

  onclickHome() {
    return;
  }

  render() {
    return (
      <View style={styleHeader.head} >
        <TouchableOpacity onPress={this.onclickHome.bind(this)}>
          <Text style={styleHeader.logo}>dribbble</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const styleList = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
})



const styleHeader = StyleSheet.create({
  head: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA4D8A',
  },
  logo: {
    textAlign: 'center',
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#FFFFFF'
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Header;