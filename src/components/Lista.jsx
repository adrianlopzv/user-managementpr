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
                  <li className='list__container' key={x.id}>
                      <i className='list__icon'></i>
                      <div className='list__div'>
                        <p className='list__name'>{x.name}</p>
                        <p className='list__email'>{x.email}</p>
                      </div>
                      <p onClick={this.handleClick(x.id)} className="list__btn">Editar</p>
                  </li>)} 
                  {/* <span className='user-icon'></span> */}
            </ul>
        )
    }
}