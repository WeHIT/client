import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: [{
    actionText: '获取天气',
    descText: '我要查询天气',
  }, {
    actionText: '查询快递',
    descText: '我要查询快递',
  }, {
    actionText: '获取新闻',
    descText: '我要查新闻',
  }],
}

const tipBarReducer = handleActions({
  [actions.fetchingDataSuccess]: (state, action) => {
    return action.payload.tipBar ? {
      ...state,
      data: action.payload.tipBar,
    } : {
      ...state,
    }
  },
}, initState);

export default tipBarReducer;
