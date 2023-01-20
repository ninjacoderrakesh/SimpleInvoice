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
  RESET_LOGIN,
} from '../Actions';

let initialState = {
  loader: false,
  data: {},
  error: '',
  userDetail: {},
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case CONFIRM_OTP_REQUEST:
      return {...state, loader: true, data: {}, error: ''};
    case LOGIN_SUCCESS:
    case CONFIRM_OTP_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.payload,
        error: '',
      };
    case LOGIN_FAIL:
    case CONFIRM_OTP_FAIL:
      return {
        ...state,
        loader: false,
        data: {},
        error: action.payload,
      };
    case RESET_LOGIN:
      return {
        ...state,
        loader: false,
        data: {},
        error: '',
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        loader: true,
        error: '',
        userDetail: {},
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loader: false,
        error: '',
        userDetail: action.payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        loader: false,
        error: action.payload,
        userDetail: {},
      };
    default:
      return state;
  }
};
