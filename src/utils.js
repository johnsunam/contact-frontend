import cookie from 'react-cookies';

export const header = () => ({ headers: { Authorization: `Bearer ${cookie.load('token')}`}})