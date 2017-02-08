import { combineReducers } from 'redux';
import apiReducer from './apiReducer.js';
import resourcesReducer from './resourcesReducer.js';
import populationReducer from './populationReducer.js';
import errorReducer from './errorReducer.js';

const reducers = combineReducers({
    api: apiReducer,
    resources: resourcesReducer,
    population: populationReducer,
    error: errorReducer
});

export default reducers;