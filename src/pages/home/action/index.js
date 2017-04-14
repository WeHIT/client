import { createAction } from "redux-actions";

import * as types from '../constant';

import {
  fetchData,
} from '../api';

export const fetchingData = createAction(types.FETCHING_DATA, data => {
  // 构造 data，和返回的一样
  // console.log(data)
  return data;
  // return {
  //   data: [{
  //     type: 'normalDialog',
  //     data: {
  //       content: data.options.descText || data.options.data,
  //       position: 'right'
  //     },
  //   }, {
  //     type: 'normalDialog',
  //     data: {
  //       content: 'WeHIT 正在输入内容...',
  //       position: 'left',
  //     },
  //   }],
  // };
});
export const fetchingDataSuccess = createAction(types.FETCHING_DATA_SUCCESS, data => data);
export const fetchingDataFailure = createAction(types.FETCHING_DATA_FAILURE);

export function getData(data) {
  return (dispatch) => {
    dispatch(fetchingData(data));
    fetchData(data)
      .then((res) => {
        dispatch(fetchingDataSuccess(res));
      })
      // .catch((err) => {
      //   console.log(`error: ${err}`);
      //   dispatch(fetchingDataFailure());
      // });
  };
}

export const getNewCity = createAction(types.GET_NEW_CITY, data => data);
export const getNewGeo = createAction(types.GET_NEW_GEO, data => {console.log(data); return data})
