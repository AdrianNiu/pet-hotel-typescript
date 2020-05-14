import { combineReducers } from 'redux';
import ownerReducer from './owner.reducer';

const rootReducer = combineReducers({ ownerReducer });

export default rootReducer;
