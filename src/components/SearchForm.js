import React, { Component } from 'react'

const API_KEY = '9fd26d39'

export class SearchForm extends Component{
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`) //Es asincrono
        .then(res => res.json()) //devuelve un string de datos y lo tranformamos en json
        .then(results  => {
            console.log(results)// eslint-disable-next-line
            const { Search = [], totalResults = "" } = results 
            this.props.onResults( Search )
        })
    }

    render(){
        return(
            <form onSubmit={ this._handleSubmit } className="SearchForm-wrapper">
                <div className="field has-addons">
                    <div className = "control">
                        <input  className = "input" 
                                type = "text" 
                                placeholder = "Movie to search"
                                onChange = { this._handleChange }
                        />
                    </div>
                    <div className="control">
                        <button className = "button is-info" href="#">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
