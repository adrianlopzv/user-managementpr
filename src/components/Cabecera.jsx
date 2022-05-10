import React, { Component } from 'react'


export default class Cabecera extends Component {
    render() {
        const { nuevoUsuario } = this.props
        return (
            <header className='users-header'>
                <h2 className='users-title'>User list</h2>
                <h6 className='user-subt'>User management</h6>
                <button onClick={nuevoUsuario}>Nuevo Usuario</button>
            </header>
        ) 
    }
}
