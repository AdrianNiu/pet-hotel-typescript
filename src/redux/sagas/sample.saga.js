import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* sampleGet() {
  try {
    const response = yield axios.get('/api/template');

    yield put({ type: 'SET_SAMPLE_RESPONSE', payload: response.data });
  } catch (error) {
    console.error('Sample GET failed', error);
  }
}

function* sampleSaga() {
  yield takeLatest('GET_SAMPLE_API_CALL', sampleGet);
}

export default sampleSaga;
