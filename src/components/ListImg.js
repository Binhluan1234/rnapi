import React, { Component } from 'react'
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  NetInfo
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/actions';
import Row from './Row'

class ListImg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      refreshing: false,
    }
  }

  componentWillMount() {
    this.getData();
  }

  getData = async () => {
    if (this.state.isLoading) {
      return;
    }

    this.setState({
      isLoading: true,
    });

    await this.props.dispatchGetData(this.props.page + 1);

    this.setState({
      isLoading: false,
    });
  }

  onEndReached = () => {
    this.getData();
  };

  renderFooter = () => {
    if (!this.state.isLoading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {

    return (
      <View style={styleList.container}>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) =>
            <Row itemProps={item} navigation={this.props.navigation}/>
          }
          //keyExtractor={item => item}
          ListFooterComponent={this.renderFooter.bind(this)}
          onEndReachedThreshold={1}
          onEndReached={this.onEndReached.bind(this)}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    page: state.page
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetData: (page) => dispatch(TodoActions.getData(page))
  }
};

const styleList = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ListImg)