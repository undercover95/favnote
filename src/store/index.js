import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const middleware = [thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
/* eslint-enable */

export default store;
