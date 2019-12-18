import React, { Component } from 'react';

class NuevaCita extends Component {
    state = {  }


    render() { 
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h3 className="card-title text-center mb-5">
                        Ingreso Datos del Paciente
                    </h3>
                    <form>
                        <div className="from-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-8">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre mascota"
                                name="mascota"
                                />
                            </div>
                        </div>

                        <div className="from-group row mt-3">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-8">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre Dueño mascota"
                                name="propietario"
                                />
                            </div>
                        </div>

                        <div className="from-group row mt-3">
                            <label className="col-sm-4 col-lg-3 col-form-label">Fecha</label>
                            <div className="col-sm-6 col-lg-3">
                                <input 
                                type="date"
                                className="form-control"
                                name="fecha"
                                />
                            </div>

                            <label className="col-sm-3 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-6 col-lg-3">
                                <input 
                                type="time"
                                className="form-control"
                                name="hora"
                                />
                            </div>
                       </div>

                       <div className="from-group row mt-3">
                            <label className="col-sm-4 col-lg-3 col-form-label">Síntomas</label>
                            <div className="col-sm-6 col-lg-8">
                                <textarea 
                                className="form-control"
                                name="sintomas"
                                placeholder="sintomas o molestar de la mascota"
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