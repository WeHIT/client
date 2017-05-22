import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  status: true,
};

const isLoginReducer = handleActions({
  [actions.changeIsLogin]: (state, action) => ({
    ...state,
    status: action.payload
  }),
}, initState);

export default isLoginReducer;
