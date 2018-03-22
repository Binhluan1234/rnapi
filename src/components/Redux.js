import React, { Component } from 'react'
import { createStore } from 'redux'

var defaultState = {
  data: [],
  page: 0,
  isLoading: true
}

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOADMORE':
      // alert("Reload state: "+state.data.length);
      // alert("rel "+JSON.stringify(action.data));
      return {
        ...state,
        data: [
          ...state.data,
          ...action.data,
        ],
        page: state.page + 1,
      }
    default: return state;
  }
}

const store = createStore(todoReducer);
export default store;