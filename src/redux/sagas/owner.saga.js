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

function* sampleSaga() {
  yield takeLatest('GET_OWNERS', getOwners);
}

export default sampleSaga;
