import {
  FETCHING_LOGIN,
  FETCHING_LOGIN_SUCCESS,
  FETCHING_LOGIN_FAILURE } from '../constant';

const initState = {
  data: {},
  dataFetched: false,
  isFetching: false,
  error: false,
}

export default function loginReducer(state = initState, action) {
  switch(action.type) {
    case FETCHING_LOGIN: {
      return {
        ...state,
        data: {},
        isFetching: true,
      }
    }
    case FETCHING_LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    }
    case FETCHING_LOGIN_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: true
      }
    }
    default: {
      return state;
    }
  }
}