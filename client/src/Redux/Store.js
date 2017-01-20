import { combineReducers, createStore } from 'redux';
import ResourceReducer from './Reducers/ResourcesReducer.js';
import PopulationReducer from './Reducers/PopulationReducer.js';

const reducers = combineReducers({
    resources: ResourceReducer,
    population: PopulationReducer
});

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(reducers);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => {
    let currentState = store.getState();
    console.log(currentState.resources);
    console.log(currentState.population);
});

export default store;