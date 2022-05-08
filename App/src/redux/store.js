import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { loggedOut } from './middleware';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    logger, 
    thunk,
    loggedOut
    ))
);

export default store;
