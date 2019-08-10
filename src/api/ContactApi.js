import axios from 'axios';
import { header } from '../utils';

const api = 'http://localhost:3002'

export const contactsApi = (userId) => {
  return axios.get(`${api}/contacts/${userId}`, header());
}

export const contactApi = (contactId) => {
  return axios.get(`${api}/contact/${contactId}`, header());
}

export const createContactApi = (data) => {
  return axios.post(`${api}/create/`, data, header());
}

export const updateContactApi = (data) => {
  return axios.put(`${api}/update/`, data, header());
}

export const deleteContactApi = (contactId) => {
  return axios.delete(`${api}/delete/${contactId}`, header());
}