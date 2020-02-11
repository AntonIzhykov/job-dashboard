import * as CONSTANTS from './constants';
// import { post, get } from '../api';

// export const getIntegrationToken = () => dispatch => {
//   dispatch({ type: CONSTANTS.GET_INTEGRATION_TOKEN.START });
//
//   return get('/apparatus/token', {}, false)
//     .then(res => {
//       dispatch({
//         type: CONSTANTS.GET_INTEGRATION_TOKEN.SUCCESS,
//         payload: { integrationToken: res.data.token }
//       });
//
//       return res.data.token;
//     })
//     .catch(error => dispatch({ type: CONSTANTS.GET_INTEGRATION_TOKEN.ERROR, payload: error }));
// };
//
// export const login = jwt => dispatch => {
//   dispatch({ type: CONSTANTS.LOGIN.START });
//
//   return post('/login', { token: jwt }, false)
//     .then(res => {
//       dispatch({
//         type: CONSTANTS.LOGIN.SUCCESS,
//         payload: res.data
//       });
//       return res.data;
//     })
//     .catch(error => dispatch({ type: CONSTANTS.LOGIN.ERROR, payload: error }));
// };


export const disconnect = () => dispatch => {
  dispatch({ type: CONSTANTS.DISCONNECT });
};


export const authRequest = () => ({
  type: CONSTANTS.AUTH_REQUEST
});

export const authSuccess = () => ({
  type: CONSTANTS.AUTH_SUCCESS
});

export const authFailure = error => ({
  type: CONSTANTS.AUTH_FAILURE,
  payload: error
});

export const getUserRequest = () => ({
  type: CONSTANTS.GET_USER_REQUEST
});

export const getUserSuccess = user => ({
  type: CONSTANTS.GET_USER_SUCCESS,
  payload: user
});

export const getUserFailure = error => ({
  type: CONSTANTS.GET_USER_FAILURE,
  payload: error
});

export const setOnline = () => ({
  type: CONSTANTS.SET_ONLINE
});

export const setOffline = () => ({
  type: CONSTANTS.SET_OFFLINE
});

export const setLoadingTrue = () => ({
  type: CONSTANTS.LOADING_IS_TRUE
});

export const setLoadingFalse = () => ({
  type: CONSTANTS.LOADING_IS_FALSE
});

