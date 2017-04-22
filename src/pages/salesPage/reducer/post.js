import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: null,
  dataFetched: false,
  isFetching: false,
  error: false,
}

const postReducer = handleActions({
  [actions.fetchingData]: (state, action) => ({
    ...state,
    isFetching: true,
  }),
  [actions.fetchingDataSuccess]: (state, action) => ({
    ...state,
    isFetching: false,
    data: action.payload.data,
  }),
  [actions.fetchingDataFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: true,
  }),
  [actions.postingDataSuccess]: (state, action) => {
    if(action.payload.data.msg === '评论成功' && action.payload.data.info) {
      return {
        ...state,
        data: {
          ...state.data,
          comment: state.data.comment.concat({
            body: action.payload.data.info.content,
            username: action.payload.data.info.username,
            posterid: action.payload.data.info.posterid,
            avatar: action.payload.data.info.avatar || 'http://okujk9avg.bkt.clouddn.com/20170422149286668491987.png',
            added: action.payload.data.info.added,
            fromPt: 'no',
          })
        }
      }
    }
    return {
      ...state
    };
  },
}, initState);

export default postReducer;
