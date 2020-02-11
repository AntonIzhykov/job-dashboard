import axios from 'axios';

import { store } from '../index';
import { disconnect } from '../auth/actions';
import { startsWith } from 'lodash';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const authHeader = () => {
  const token = store.getState().auth.bd_token;

  return { Authorization: `Bearer ${token}` };
};

const url = (path, params) => {
  const sections = path.split(':');
  const sectionsWithParams = sections.map(section =>
    startsWith(section, '/') ? section : params[section]
  );
  const pathWithParams = sectionsWithParams.join('');
  return process.env.REACT_APP_API_URL + pathWithParams;
};

const getHeaders = auth => {
  let headers = { ...defaultHeaders };
  if (auth) {
    headers = { ...headers, ...authHeader() };
  }
  return headers;
};

export let apiService;

export const get = (path, params = {}, auth = true) =>
  apiService.get(url(path, params), { params, headers: getHeaders(auth) });

export const post = (path, params = {}, auth = true) =>
  apiService.post(url(path, params), params, { headers: getHeaders(auth) });

export const put = (path, params = {}, auth = true) =>
  apiService.put(url(path, params), params, {
    headers: getHeaders(auth)
  });

export const deleteRequest = (path, params = {}, auth = true) =>
  apiService.delete(url(path, params), { params, headers: getHeaders(auth) });

export const upload = (path, params = {}, auth = true) =>
  apiService.post(url(path, params), params, {
    headers: { ...getHeaders(auth), 'content-type': 'multipart/form-data' }
  });

export const download = (path, params = {}, auth = true) =>
  apiService.get(url(path, params), {
    responseType: 'blob',
    params,
    headers: getHeaders(auth)
  });

export function setupResponseInterceptors(store) {
  // Add a response interceptor
  apiService = axios.create({});
  apiService.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      console.log(error.response);

      switch (error && error.response && error.response.status) {
        case 401:
          switch (error.response.data.message) {
            case 'token_expired':
            case 'Unauthenticated.':
              store.dispatch(disconnect());
              break;
            default:
              break;
          }
          break;
        case 400:
          switch (error.response.data.error) {
            case 'token_invalid':
            case 'token_not_provided':
              store.dispatch(disconnect());
              break;
            default:
              break;
          }

          break;
        case 404:
          switch (error.response.data.error) {
            case 'user_not_found':
              store.dispatch(disconnect());
              break;
            default:
              break;
          }

          break;

        default:
          return Promise.reject(error.response);
      }

      return Promise.reject(error.response);
    }
  );
}
