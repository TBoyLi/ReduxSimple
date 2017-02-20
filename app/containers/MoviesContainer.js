import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MoviesActions from '../actions/MoviesAction';
import Movies from '../components/Movies';

let MoviesContainer = ({movies, actions}) => {
    console.log(movies);
    console.log(actions);
    return(
        <Movies
            data={movies.data}
            flag={movies.flag}
            {...actions}/>
    )
}

const mapStateToProps = (state) => {
    return{
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions: bindActionCreators(MoviesActions, dispatch)
    }
}


export default MoviesContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MoviesContainer);