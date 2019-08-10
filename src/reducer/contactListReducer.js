const initialState = {
  list: [],
  isLoading: false,
  error: null
}

export const contactListReducer = (state = initialState, action) => {
  let newState = { ...initialState };
  switch(action) {
    case 'FETCT_CONTACT_LIST_PROGRESS':
      newState.isLoading = true;
      newState.error = null;
    return newState;
    case 'FETCH_CONTACT_LIST_SUCCESS':
      let conList = [ ...newState.list ];
      newState.list = conList.concat(action.payload);
      newState.error = null;
      newState.isLoading = false;
      return newState;
    case 'FETCH_CONTACT_LIST_ERROR':
      newState.isLoading = false;
      newState.error = action.payload;
      return newState;
    default:
      return newState;
  }
}