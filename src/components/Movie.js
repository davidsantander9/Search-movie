import React, {Component} from 'react'
// import Proptypes from 'proptypes'

export class Movie extends Component{
    // static proptypes = {
    // //     title: Proptypes.string,
    // //     year: Proptypes.string, 
    // //     poster: Proptypes.string
    // }

    render(){
        const { poster, title, year, key } = this.props 
        return(
            <div className="card" key={key}>
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={poster} alt={title}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p>{title}</p>
                        <a href="www.css.com">#css</a> <a href="www.responsive.com">#responsive</a>
                        <time>{ year }</time>
                    </div>
                </div>
            </div>
        )
    }
}