import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBack } from '../components/ButtonBack'

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

            <div className="card-detail">
                <ButtonBack/>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={ Poster } alt={ Title }/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-2">{ Title }</p>
                                <p className="title is-4">{ Actors }</p>
                            </div>
                        </div>

                        <div className="content"> 
                        <p> { Plot } </p>
                        <p> { Metascore }</p>
                        </div>
                    </div>
                    </div>

            </div>

        )
    }
}