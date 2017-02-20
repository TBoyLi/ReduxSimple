import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterAction';
//上一行  你原来写的是 import CounterActions from ''
let CounterContainer = ({counter, actions}) => {
    console.log(counter);
    console.log(actions);
    return(
        <Counter
            count={counter.count}
            {...actions}/>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    // console.log(dispatch);
    return {
        actions: bindActionCreators(CounterActions, dispatch)
    }
}

export default CounterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(CounterContainer)