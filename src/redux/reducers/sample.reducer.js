const sampleReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SAMPLE_RESPONSE':
      return action.payload;
    case 'CLEAR_SAMPLE_RESPONSE':
      return '';
    default:
      return state;
  }
};

export default sampleReducer;
