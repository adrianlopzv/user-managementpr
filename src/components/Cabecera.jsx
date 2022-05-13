import React, { Component } from 'react'


export default class Cabecera extends Component {
    render() {
        return (
            <header className='header__main'>
                <h2 className='header__title'>User list</h2>
                <h6 className='header__subtitle'>User management</h6>
            </header>
        ) 
    }
}
