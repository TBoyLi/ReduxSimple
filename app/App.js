import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import CounterContainer from './containers/CounterContainer'; //官方计数器
import MoviesContainer from './containers/MoviesContainer'; //网络请求
import * as reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);



let App = () => {
    return(
        <Provider store={store}>
            <MoviesContainer />
            {/*<CounterContainer />*/}
        </Provider>
    )
}

export default App;
