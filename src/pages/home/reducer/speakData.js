import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: [],
}

const speakDataReducer = handleActions({
  [actions.fetchingDataSuccess]: (state, action) => ({
    ...state,
    data: state.data.concat(action.payload),
  }),
}, initState);

export default speakDataReducer;
