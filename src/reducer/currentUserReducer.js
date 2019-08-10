const initialState = {
  username: null,
  email: null,
  id: null,
  avatar: null,
}

 export const currentUserReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'LOGIN_USER':
      newState.username = action.payload.username;
      newState.email = action.payload.email;
      newState.id = action.payload.id;
      newState.avatar = action.payload.avatar;
    return newState;
    default:
      return newState;
  }
}
