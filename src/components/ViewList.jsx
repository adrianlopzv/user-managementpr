import React, { Component } from "react";
import Cabecera from './Cabecera'
import Lista from './Lista'

export default class ViewList extends Component {
    render() {
        const { data, handleClick, nuevoUsuario } = this.props
        
        return (
            <div className="main-container">
            <Cabecera nuevoUsuario={nuevoUsuario}/>
            <Lista data={data} handleClick={handleClick} />
            <button className='main-btn btn__add-user' onClick={nuevoUsuario}>Add User</button>
            </div>
        )
    }
}