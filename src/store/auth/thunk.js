import { getUser, authentication, getReport } from '../api/axios';
import * as actions from './actions';
import TokenStorage from '../api/token';
import { history } from '../index';
import * as CONSTANTS from './constants';
import { get } from '../api';

export const handleCheckCurrentUser = () => dispatch => {
  const token = TokenStorage.getItemFromLocalStorage();

  if (!token) return history.push('/');

  dispatch(actions.getUserRequest());
  getUser(token)
    .then(response => {
      dispatch(actions.getUserSuccess(response.data));
      return history.push('/chat');
    })
    .catch(({ message }) => dispatch(actions.getUserFailure(message)));
};

export const handleAuthentication = (login, password, callBack) => dispatch => {
  dispatch(actions.authRequest());
  authentication(login, password)
    .then(response => {
      const { token } = response.data;
      TokenStorage.setItemInLocalStorage(token);
      dispatch(actions.authSuccess());
      dispatch(handleCheckCurrentUser());
      callBack && callBack();
    })
    .catch(error => {
      dispatch(actions.authFailure(error.response.data.message));
    });
};
//
// export const getUser = dispatch => {
//   dispatch({ type: CONSTANTS.GET_USER.START });
//   return get('/account', {}, true)
//     .then(res => {
//       dispatch({
//         type: CONSTANTS.GET_USER.SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(error => dispatch({ type: CONSTANTS.GET_USER_FAILURE, payload: error }));
// };
