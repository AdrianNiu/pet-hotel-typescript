import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getOwners() {
  try {
    const response = yield axios.get('/owner');
    yield put({ type: 'SET_OWNERS', payload: response.data });
  } catch (error) {
    console.error('Sample GET failed', error);
  }
}

function* addOwners(action) {
  console.log('this action.payload  in addOwner',action.payload)
  try {
    const response = yield axios.post('/owner',action.payload);
    yield put({ type: 'SET_OWNERS', payload: response.data });
  } catch (error) {
    console.error('POST for adding owner failed', error);
  }
}

function* ownerSaga() {
  yield takeLatest('GET_OWNERS', getOwners);
  yield takeLatest('ADD_OWNER', addOwners);

}



export default ownerSaga;
