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

export const getNewCity = createAction(types.GET_NEW_CITY, data => data);
export const getNewGeo = createAction(types.GET_NEW_GEO, data => data)
