const initialState = {
  list: [],
  isLoading: false,
  error: null
}

export const contactListReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch(action.type) {
    case 'FETCT_CONTACT_LIST_PROGRESS':
      newState.isLoading = true;
      newState.error = null;
    return newState;
    case 'FETCH_CONTACT_LIST_SUCCESS':
      newState.list = action.payload;
      newState.error = null;
      newState.isLoading = false;
      return newState;
    case 'FETCH_CONTACT_LIST_ERROR':
      newState.isLoading = false;
      newState.error = action.payload;
      return newState;
    case 'LOGOUT':
      newState = initialState;
      return newState;
    default:
      return newState;
  }
}