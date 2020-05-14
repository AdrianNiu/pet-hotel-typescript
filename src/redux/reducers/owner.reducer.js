const ownerReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_OWNERS':
      return action.payload;
  //  case 'CLEAR_SAMPLE_RESPONSE':
  //    return '';
    default:
      return state;
  }
};

export default ownerReducer;
