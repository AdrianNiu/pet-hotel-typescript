import { all } from 'redux-saga/effects';
import ownerSaga from './owner.saga';

export default function* rootSaga() {
  yield all([ownerSaga()]);
}
