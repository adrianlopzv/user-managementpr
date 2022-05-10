import React, { Component } from 'react';
import axios from 'axios'
import './App.css'
import UserForm from './components/UserForm'
import ViewList from './components/ViewList'

class App extends Component {
  state = {
    data: [],
    ruta: 'lista',
  }

  constructor() {
    super()
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => this.setState({ data })) 
    // .then se da por la promesa del get, y se estan agregando los datos del get en data, dentro del estado 
  }
  seleccionaUsuario = id => {
    this.setState({
      ruta:'formulario',
      usuarioSeleccionado: id,
    })
  }

  agregarNuevoUsuario = usuario => {
    axios.post('https://jsonplaceholder.typicode.com/users', usuario)
    .then(({ data }) => {
      const newData = this.state.data.concat(data)
      this.setState({
        data: newData,
        ruta: 'lista',
      })
    })  
  }

  actualizarNuevoUsuario = (id, values) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
    .then(() => {
      const newData = this.state.data.map(x => x.id === id ? values : x)
      this.setState({
        data: newData,
        ruta: 'lista',
      })
    })
  }
  nuevoUsuario = () => {
    this.setState({ ruta: 'formulario' }) //cuando escribimos setState es para setear el estado
  }

  render() {
    const { ruta, data, usuarioSeleccionado } = this.state //metemos la propiedad de ruta como variable
    // = con this.state damos referencia de donde esta la propiedad del state
    const valoresIniciales = usuarioSeleccionado && data.find(x => x.id === usuarioSeleccionado)
    return (
      <div className="main-container">
        {ruta === 'lista' && <ViewList 
        nuevoUsuario={this.nuevoUsuario}
        handleClick={this.seleccionaUsuario}
        data={data}/>}
        {ruta === 'formulario' && <UserForm 
        valoresIniciales={valoresIniciales || {}}
        handleSubmit={this.agregarNuevoUsuario}
        handleUpdate={this.actualizarNuevoUsuario}/>}
      </div>
    );
  }
}

export default App;
