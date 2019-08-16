import { loginApi, userApi } from '../api/UserApi';
import cookie from 'react-cookies';

export const login = data => dispatch => {
  return loginApi(data)
    .then(res => {
      cookie.save('token ', res.data.token, { path: '/' });
      cookie.save('userId', res.data.data.id, { path: '/'});
      dispatch({
        type: 'LOGIN_USER',
        payload: res.data.data,
      })
      return res;
    })
}

export const getCurrentUser = userId => dispatch => {
  return userApi(userId)
    .then(res => {
       dispatch({
        type: 'LOGIN_USER',
        payload: res.data.data,
      });
      return res.data;
    })
    .catch(err => { 
      const { status, data } = err.response;
      data.status = status;
      dispatch({
        type: 'SET_ERROR',
        payload: data,
      });
      return data;
    });
}

export const logout = () => dispatch => dispatch({type: 'LOGOUT'});