import React, { Component } from 'react';

class NuevaCita extends Component {
    state = { 
        cita : {
            mascota : '',
            propietario : '',
            fecha :'',
            hora : '',
            sintomas : ''
          },
          error : false
     }

     handlechange = e => {
        // colocar lo que el usuario esta escribiendo en el state y sobreescribirlo
        this.setState ({
            cita : {
            // crear copia del state original
            ...this.state.cita,
            
            // maper todo el objeto de CITA yo tomara el input por su nombre y valor
            [e.target.name] : e.target.value
            }
        })

     }

     // envio de datos SUBMIT desde el boton agregar cita

     handleSubmit = e => {
         e.preventDefault();

         //extraer los valores del state
         const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

         // validacion de todos los campos de los inputs
         if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
             this.setState({
                 error:true
             });

             //detener la ejecucion
             return ;
         }
     }


    render() { 
        return (
            <div className="card mt-4 py-4 mb-5">
                <div className="card-body">
                    <h5 className="card-title text-center mb-5 text-bold">
                        Ficha de Ingreso Mascota
                    </h5>
                    <form
                    onSubmit={this.handleSubmit}
                    >
                        <div className="from-group row mx-auto">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-8">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Ingrese un nombre"
                                name="mascota"
                                onChange = {this.handlechange}
                                value = {this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="from-group row mt-3 mx-auto">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-8">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Ingrese nombre completo"
                                name="propietario"
                                onChange = {this.handlechange}
                                value = {this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className="from-group row mt-3 mx-auto">
                            <label className="col-sm-4 col-lg-3 col-form-label">Fecha</label>
                            <div className="col-sm-6 col-lg-3">
                                <input 
                                type="date"
                                className="form-control"
                                name="fecha"
                                onChange = {this.handlechange}
                                value = {this.state.cita.fecha}
                                />
                            </div>

                            <label className="col-sm-3 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-6 col-lg-3">
                                <input 
                                type="time"
                                className="form-control"
                                name="hora"
                                onChange = {this.handlechange}
                                value = {this.state.cita.hora}
                                />
                            </div>
                       </div>

                       <div className="from-group row mt-3 mx-auto">
                            <label className="col-sm-4 col-lg-3 col-form-label">Síntomas</label>
                            <div className="col-sm-6 col-lg-8">
                                <textarea 
                                className="form-control"
                                name="sintomas"
                                placeholder="sintomas o molestar de la mascota"
                                onChange = {this.handlechange}
                                value = {this.state.cita.sintomas}
                                >
                                </textarea>
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-4 btn btn-success btn-block" value="Agregar cita" />
                    </form>
                </div>
            </div>
          );
    }
}
 
export default NuevaCita;