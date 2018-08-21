const defauleState = {
    focused: false
  };
  
  export default (state = defauleState, action) => {
    if (action.type === 'search_focus') {
      return {
        focused: true
      }
    };
    if (action.type === 'search_blur') {
      return {
        focused: false
      }
    }
    return state
  }
  