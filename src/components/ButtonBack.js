import React, { Component } from 'react'

export class ButtonBack extends Component{
    _goBack(){
        window.history.back();
    }
    render(){
        return(
            <button className="button is-white" onClick={ this._goBack }>Go back</button>
        )
             
    } 
}