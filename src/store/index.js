import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
));

const persistedState = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : {};


const store = createStore(
  rootReducer,
  persistedState,
  middleware
);

store.subscribe(() => localStorage.setItem('store', JSON.stringify(store.getState())));

export default store;
