import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Title } from '../components/Title'
const API_KEY = '9fd26d39'

export class Detail extends Component{
    static propTypes = {
        id: PropTypes.string
    }

    state =  { movie: {} }

    _fetchMovie({ id }){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`) //Es asincrono
        .then(res => res.json()) //devuelve un string de datos y lo tranformamos en json
        .then(movie  => {
            this.setState({ movie })
        })    
    }

    componentDidMount(){
        let { id } = this.props
        this._fetchMovie({ id });
    }

    _goBack(){
        window.history.back();
    }

    render(){
        let { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return(
            <div>
                <button onClick={ this._goBack }>Go back</button>
                <h1>{ Title }</h1>
                <img src={ Poster } alt={ Title }/>
                <h3>{ Actors }</h3>
                <span>{ Metascore }</span>
                <p>{ Plot } </p>
            </div>
        )
    }
}