import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Movie extends Component{
    static propTypes = {
        id:     PropTypes.string,
        title:  PropTypes.string,
        year:   PropTypes.string, 
        poster: PropTypes.string
    }

    render(){
        const { id, poster, title, year, key } = this.props 
        return(
            <Link to={`/detail/${id}`}>
                <div className="card" key={key}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src={poster} alt={title}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <p>{title}</p>
                            <p>
                                <time>{ year }</time>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}