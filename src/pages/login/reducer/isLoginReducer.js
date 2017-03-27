import { CHANGE_IS_LOGIN } from '../constant';

const initState = {
  status: true,
}

export default function isLoginReducer(state = initState, action) {
  switch(action.type) {
    case CHANGE_IS_LOGIN: {
      return {
        ...state,
        status: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}