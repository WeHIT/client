import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: [{
    actionText: '淘二手',
    descText: '我要淘二手',
  }, {
    actionText: '查饭卡',
    descText: '我要查饭卡',
  }, {
    actionText: '获取新闻',
    descText: '我要查新闻',
  }, {
    actionText: '获取天气',
    descText: '我要查询天气',
  }, {
    actionText: '查询快递',
    descText: '我要查询快递',
  }, {
    actionText: '查空教室',
    descText: '我要查空教室',
  }],
};

const tipBarReducer = handleActions({
  [actions.fetchingDataSuccess]: (state, action) => {
    return action.payload.tipBar ? {
      ...state,
      data: action.payload.tipBar,
    } : {
      ...state,
    }
  },
  [actions.backInitTipBar]: (state, action) => ({
    ...state,
    data: initState.data,
  }),
}, initState);

export default tipBarReducer;
