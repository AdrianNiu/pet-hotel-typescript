import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addPet(action) {
    try {
        console.log('made it to ADD PET SAGA', action.payload)
        yield axios.post('/pet', action.payload);
        yield put({ type: 'FETCH_PETS' });
    } catch (error) {
        console.error('Sample GET failed', error);
    }
}

function* addPetSaga() {
    yield takeLatest('POST_PET', addPet);
}

export default addPetSaga;
