import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deletePet(action) {
    try {
        console.log('made it to DELETE PET SAGA', action.payload)
        yield axios.delete('/pet', {data: action.payload});
        yield put({ type: 'FETCH_PETS' });
    } catch (error) {
        console.error('Sample DELETE failed', error);
    }
}

function* deletePetSaga() {
    yield takeLatest('DELETE_PET', deletePet);
}

export default deletePetSaga;