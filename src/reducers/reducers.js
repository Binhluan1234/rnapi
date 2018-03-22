
var defaultState = {
  data: [],
  page: 0,
  isLoading: true
}

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOADMORE':
      return {
        ...state,
        data: [
          ...state.data,
          ...action.data,
        ],
        page: state.page + 1,
      }
    case 'LOAD':
      alert('ADDD');
    default: return state;
  }
}

export default todoReducer;