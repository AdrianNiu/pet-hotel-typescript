import { all } from 'redux-saga/effects';
import ownerSaga from './owner.saga';
import addPetSaga from './add.pet.saga';
import getPetSaga from './get.pet.saga';

export default function* rootSaga() {
  yield all([
    ownerSaga(),
    addPetSaga(),
    getPetSaga(),
  ]);
}
