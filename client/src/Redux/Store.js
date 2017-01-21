import { createStore } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares'
import axios from 'axios';

import * as errorActions from './actions/errorActions';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(reducers, {}, middlewares);

export default store;