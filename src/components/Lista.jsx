import React, { Component } from 'react'

export default class Lista extends Component {
    handleClick = id => e => {
        const { handleClick } = this.props
        handleClick(id)
    }
    render() {
        const { data } = this.props

        return(
            <ul>
                {data.map(x => 
                  <li key={x.id}><i></i><p>{x.name}</p><p>{x.email}</p><p onClick={this.handleClick(x.id)} className="edit-button">Editar</p></li>)} 
            </ul>
        )
    }
}