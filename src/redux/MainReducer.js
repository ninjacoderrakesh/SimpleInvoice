import {combineReducers} from 'redux';
import {AuthReducer} from './reducers/Auth';

export const allReducer = combineReducers({
  AuthReducer,
});
