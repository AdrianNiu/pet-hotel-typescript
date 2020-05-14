import { combineReducers } from 'redux';
import ownerReducer from './owner.reducer';
import petReducer from './pet.reducer';

const rootReducer = combineReducers({ 
    ownerReducer,
    petReducer, 
});

export default rootReducer;
