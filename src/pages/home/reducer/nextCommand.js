import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: 'common',
}

const speakDataReducer = handleActions({
  [actions.fetchingDataSuccess]: (state, action) => ({
    ...state,
    data: action.payload.type,
  }),
}, initState);

export default speakDataReducer;
