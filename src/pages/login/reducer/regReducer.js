import {
  FETCHING_REG,
  FETCHING_REG_SUCCESS,
  FETCHING_REG_FAILURE } from '../constant';

const initState = {
  data: {},
  dataFetched: false,
  isFetching: false,
  error: false,
}

export default function regReducer(state = initState, action) {
  switch(action.type) {
    case FETCHING_REG: {
      return {
        ...state,
        data: {},
        isFetching: true,
      }
    }
    case FETCHING_REG_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    }
    case FETCHING_REG_FAILURE: {
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