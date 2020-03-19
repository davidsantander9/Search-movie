import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Movie } from './Movie'

export class MovieList extends Component{
    static propTypes = {
        movies: PropTypes.array
    }

    render(){

        let { movies } = this.props

        return movies.map( movie => {
        return (
            <div className="movie" key = { movie.imdbID } >
                <Movie
                    id     = { movie.imdbID }
                    title  = { movie.Title }
                    poster = { movie.Poster }
                    year   = { movie.Year } 
                 /> 
            </div>
        )
        })
    }
}