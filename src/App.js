import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

class App extends Component {
  state = {
    citas : [] // arreglo de objetos
  }

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas , datos];

    //agregar el nuevo state
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
         </div>

      </div>
    );

  }
}

export default App;

