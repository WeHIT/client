import {
  FETCHING_LOGIN,
  FETCHING_LOGIN_SUCCESS,
  FETCHING_LOGIN_FAILURE,
  FETCHING_REG,
  FETCHING_REG_SUCCESS,
  FETCHING_REG_FAILURE,
} from '../constant';

import {
  fetchLoginData,
  fetchRegData
} from '../api';

export function getLogin() {
  return {
    type: FETCHING_LOGIN,
  };
}

export function getLoginSuccess(data) {
  return {
    type: FETCHING_LOGIN_SUCCESS,
    payload: data,
  };
}

export function getLoginFailure() {
  return {
    type: FETCHING_LOGIN_FAILURE,
  };
}

export function fetchLogin(data) {
  return (dispatch) => {
    dispatch(getLogin());
    fetchLoginData(data)
      .then((res) => {
        dispatch(getLoginSuccess(res));
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  };
}

export function getReg() {
  return {
    type: FETCHING_REG,
  };
}

export function getRegSuccess(data) {
  return {
    type: FETCHING_REG_SUCCESS,
    payload: data,
  };
}

export function getRegFailure() {
  return {
    type: FETCHING_REG_FAILURE,
  };
}

export function fetchReg(data) {
  return (dispatch) => {
    dispatch(getReg());
    fetchRegData(data)
      .then((res) => {
        dispatch(getRegSuccess(res));
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      })
  };
}