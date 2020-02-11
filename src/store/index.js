import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

const configureStore = () =>
  createStore(
    createRootReducer(history),
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
      : applyMiddleware(thunk, routerMiddleware(history))
  );

export const store = configureStore();
