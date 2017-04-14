import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  lat: 36.204,
  lon: 138.25,
  city: '哈尔滨',
}

const geoReducer = handleActions({
  [actions.getNewGeo]: (state, action) => ({
    ...state,
    lat: action.payload.lat,
    lon: action.payload.lon
  }),
  [actions.getNewCity]: (state, action) => ({
    ...state,
    city: action.payload.city,
  }),
}, initState);

export default geoReducer;
