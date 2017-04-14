import * as types from '../constant';

import { createAction } from "redux-actions";

const fetchData = store => next => action => {
  if (action.type === types.FETCHING_DATA) {
    const data = action.payload;
    
    action.payload = {
      data: [{
        type: 'normalDialog',
        data: {
          content: data.options.descText || data.options.data,
          position: 'right'
        },
      }, {
        type: 'normalDialog',
        data: {
          content: 'WeHIT 正在输入内容...',
          position: 'left',
        },
      }],
    }
  }
  let result = next(action);
  return result;
};

export default fetchData;
