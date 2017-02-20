import * as types from './ActionTypes';

//电影返回的信息
let data = {
    title: '',
    description: '',
    movies:[]
}


export function getMovies() {
    return dispatch => {
        fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(asyncMovies(responseJson, true));
            })
            .catch((error) => {
                console.error(error);
                dispatch(asyncMovies(data, false));
            });
    }

}

function asyncMovies(responseJson, flag) {
    return {
        type: types.GET_MOVIES,
        data: responseJson,
        flag: flag
    }
}
