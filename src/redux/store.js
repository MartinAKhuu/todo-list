import { createStore, combineReducers } from 'redux';
import { todos } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {
    todos,
}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, composeWithDevTools());