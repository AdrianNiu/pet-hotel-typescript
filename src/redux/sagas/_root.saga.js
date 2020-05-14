import { all } from 'redux-saga/effects';
import ownerSaga from './owner.saga';
import addPetSaga from './add.pet.saga';

import deletePetSaga from './delete.pet.saga';
import getPetSaga from './get.pet.saga';
import checkinPetSaga from './checkin.pet.saga';
import checkoutPetSaga from './checkout.pet.saga';

export default function* rootSaga() {
  yield all([
    ownerSaga(),
    addPetSaga(),
    deletePetSaga(),
    getPetSaga(),
    checkinPetSaga(),
    checkoutPetSaga(),
  ]);
}
