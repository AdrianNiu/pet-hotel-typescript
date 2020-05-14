import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* checkinPet(action) {
  try {
    console.log(`in updatePet Saga/${action.payload}`)
    yield axios.put(`/pet/checkin/${action.payload}`);
    yield put({ type: 'GET_PETS' });
  } catch (error) {
    console.error("PUT failed", error);
  }
}

function* checkinPetSaga() {
  yield takeLatest('CHECKIN_PET', checkinPet);
}

export default checkinPetSaga;
