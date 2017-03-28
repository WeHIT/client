import { createAction } from "redux-actions";

import * as types from '../constant';
import {
  fetchLoginData,
  fetchRegData
} from '../api';

export const fetchingLogin = createAction(types.FETCHING_LOGIN);
export const fetchingLoginSuccess = createAction(types.FETCHING_LOGIN_SUCCESS, data => data);
export const fetchingLoginFailure = createAction(types.FETCHING_LOGIN_FAILURE);

export function fetchLogin(data) {
  return (dispatch) => {
    dispatch(fetchingLogin());
    fetchLoginData(data)
      .then((res) => {
        dispatch(fetchingLoginSuccess(res));
      })
      .catch((err) => {
        console.log(`err: ${err}`);
        dispatch(fetchingLoginFailure());
      });
  };
}

export const fetchingReg = createAction(types.FETCHING_REG);
export const fetchingRegSuccess = createAction(types.FETCHING_REG_SUCCESS, data => data);
export const fetchingRegFailure = createAction(types.FETCHING_REG_FAILURE);

export function fetchReg(data) {
  return (dispatch) => {
    dispatch(fetchingReg());
    fetchRegData(data)
      .then((res) => {
        dispatch(fetchingRegSuccess(res));
      })
      .catch((err) => {
        console.log(`err: ${err}`);
        dispatch(fetchingRegFailure());
      })
  };
}

export const changeIsLogin = createAction(types.CHANGE_IS_LOGIN, status => status);