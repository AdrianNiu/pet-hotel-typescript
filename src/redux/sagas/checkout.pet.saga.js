import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* checkoutPet(action) {
  try {
    console.log(`in updatePet Saga/${action.payload}`);
    yield axios.put(`/pet/checkout/${action.payload}`);
    yield put({ type: "GET_PETS" });
  } catch (error) {
    console.error("PUT failed", error);
  }
}

function* checkoutPetSaga() {
  yield takeLatest("CHECKOUT_PET", checkoutPet);
}

export default checkoutPetSaga;
