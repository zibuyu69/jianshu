import * as actionTypes from "./actionTypes";

const defauleState = {
  focused: false
};

export default (state = defauleState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return {
      focused: true
    };
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return {
      focused: false
    };
  }
  return state;
};
