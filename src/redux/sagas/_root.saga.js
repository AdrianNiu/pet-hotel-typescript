import { all } from 'redux-saga/effects';
import sampleSaga from './sample.saga';

export default function* rootSaga() {
  yield all([sampleSaga()]);
}
