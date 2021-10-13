import React, { Component } from 'react';
import MovieItem from './movieItem';

class Movies extends Component {
    render(){
        return this.props.films.map((film)=>{
                return <MovieItem myFilm={film}></MovieItem>
            }
        )
    }
}

export default Movies;