import * as types from '../actions/ActionTypes';

const initialState = {
    flag: false,
    data: null
}


export default function movies(state = initialState, action = {}) {
    switch (action.type){
        case types.GET_MOVIES:
            return Object.assign({}, state, {
                flag: action.flag,
                data: action.data
            });
        default:
            return state
    }
}