import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addPet(action) {
    try {
        yield axios.post('/pet', action.payload);
        yield put({ type: 'GET_PETS' });
    } catch (error) {
        console.error('Sample GET failed', error);
    }
}

function* addPetSaga() {
    yield takeLatest('POST_PET', addPet);
}

export default addPetSaga;
