import { createAction } from "redux-actions";

import * as types from '../constant';

import {
  fetchData,
} from '../api';

export const fetchingData = createAction(types.FETCHING_DATA);
export const fetchingDataSuccess = createAction(types.FETCHING_DATA_SUCCESS, data => data);
export const fetchingDataFailure = createAction(types.FETCHING_DATA_FAILURE);

export function getData(data) {
  return (dispatch) => {
    dispatch(fetchingData());
    fetchData(data)
      .then((res) => {
        dispatch(fetchingDataSuccess(res));
      })
      .catch((err) => {
        console.log(`error: ${err}`);
        dispatch(fetchingDataFailure());
      });
  };
}

export const postingData = createAction(types.POSTING_DATA);
export const postingDataSuccess = createAction(types.POSTING_DATA_SUCCESS, data => data);
export const postingDataFailure = createAction(types.POSTING_DATA_FAILURE)

export function postData(data) {
  return (dispatch) => {
    dispatch(postingData());
    fetchData(data)
      .then((res) => {
        dispatch(postingDataSuccess(res));
      })
      .catch((err) => {
        dispatch(postingDataFailure());
      })
  }
}
