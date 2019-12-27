import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {
  state = {
    citas : [] // arreglo de objetos
  }

  // ciclo de vida , cuando se carga un componente
  componentDidMount () {
    const citaLocalStorage = localStorage.getItem('citas');
    if(citaLocalStorage) {
      this.setState({
        citas: JSON.parse(citaLocalStorage)
      })
    }


  }

  //cuando se elimina o agregamos algo y se vuelve actualizar
  componentDidUpdate () {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));

  }

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas , datos];

    //agregar el nuevo state
    this.setState({
      citas
    })
  }

  //eliminar cita del state
  eliminarCita = id => {
    //tomar una copia del state
    const citasActuales = [...this.state.citas];

    //utilizar filter para sacar el elemento id
    const citas = citasActuales.filter(cita => cita.id !== id )

    // actualizar el state
    this.setState({
      citas
    })

  }


  render () {

    return ( 
      <div className="container">
        <Header
        titulo = 'Reserva médica veterinaria'
        
         />

         <div className="row">
           <div className="col-md-8 mx-auto">
             <NuevaCita
             crearNuevaCita={this.crearNuevaCita}
              />
           </div>
           <div className="mt-5 col-md-8 mx-auto mb-4">
             <ListaCitas
               citas={this.state.citas}
               eliminarCita={this.eliminarCita}
              />

           </div>
         </div>

      </div>
    );

  }
}

export default App;

