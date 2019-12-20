import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

class App extends Component {
  state = {
    

  }

  render () {

    return ( 
      <div className="container">
        <Header
        titulo = 'Reserva médica veterinaria'
        
         />

         <div className="row">
           <div className="col-md-8 mx-auto">
             <NuevaCita />
           </div>
         </div>

      </div>
    );

  }
}

export default App;

