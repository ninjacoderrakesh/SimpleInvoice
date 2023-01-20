import {apply, call, put, takeLatest} from 'redux-saga/effects';
import {
  CONFIRM_OTP_FAIL,
  CONFIRM_OTP_REQUEST,
  CONFIRM_OTP_SUCCESS,
  GET_USER_DETAIL,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
} from '../Actions';

function* getLoginData(action) {
  // let url =
  //   API_URL +
  //   (action.payload.type === "Consumer" ? "login" : "inspector/login");
  // try {
  //   let payload = {
  //     url: url,
  //     body: action.payload.data,
  //   };
  //   const Auth = yield call(PostData, payload);
  //   if (Auth.data.success === true) {
  //     yield put({ type: LOGIN_SUCCESS, payload: Auth?.data });
  //   } else {
  //     yield put({ type: LOGIN_FAIL, payload: Auth?.data?.message });
  //   }
  // } catch (e) {
  //   yield put({
  //     type: LOGIN_FAIL,
  //     payload: "Something Went Wrong please try later.",
  //   });
  // }
}

function* Auth() {
  yield takeLatest(LOGIN_REQUEST, getLoginData);
}

export default Auth;
