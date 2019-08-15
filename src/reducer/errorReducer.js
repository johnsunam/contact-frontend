const initialState = {
  status: null,
  message: null,
}

export const errorReducer = (state = initialState, action) => {
  let newState = { ...state }
  switch(action.type) {
    case 'SET_ERROR':
      newState.status = action.payload.status;
      newState.message = action.payload.message;
      return newState;
    case 'CLEAR_ERROR':
      newState.status = null;
      newState.message = null;
      return newState;
    default:
      return newState;
  }
}