import {fork, spawn} from 'redux-saga/effects';
import Auth from './Auth';

function* RootSaga() {
  yield spawn(Auth);
}

export default RootSaga;
