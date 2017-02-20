import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import CounterContainer from './containers/CounterContainer';
import MoviesContainer from './containers/MoviesContainer';
import * as reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);



let App = () => {
    return(
        <Provider store={store}>
            <MoviesContainer />
        </Provider>
    )
}

export default App;