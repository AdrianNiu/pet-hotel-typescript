import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPet(action) {
    try {
        console.log('made it to GET PET SAGA')
        const response = yield axios.get('/pet');
        console.log('here is response from server GET', response.data)
        yield put({ type: 'FETCH_PETS', payload: response.data });
    } catch (error) {
        console.error('GET failed', error);
    }
}

function* getPetSaga() {
    yield takeLatest('GET_PETS', getPet);
}

export default getPetSaga;
