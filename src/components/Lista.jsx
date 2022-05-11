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
                  <li className='user-container' key={x.id}>
                      <p className='user-icon'></p>
                      <div className='data-container'>
                        <p className='user-name'>{x.name}</p>
                        <p className='user-email'>{x.email}</p>
                      </div>
                      <p onClick={this.handleClick(x.id)} className="edit-button">Editar</p>
                  </li>)} 
                  {/* <span className='user-icon'></span> */}
            </ul>
        )
    }
}