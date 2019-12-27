import React from 'react';
import propTypes from 'prop-types';

const Cita = ({cita , eliminarCita}) => (
    <div className="mt-3">
        <div className="mt-2">
            <h3 className="mt-2">{cita.mascota}</h3>
            <p className="card-text"><span>Nombre Dueño : </span> {cita.propietario}</p>
            <p className="card-text"><span>Fecha : </span> {cita.fecha}</p>
            <p className="card-text"><span>Hora : </span> {cita.hora}</p>
            <p className="card-text"><span className="text-bold">Sintomas : </span>{cita.sintomas}</p>
            
            <button
             className="btn btn-danger"
             onClick={() => eliminarCita(cita.id)} //pasa el click, llama a la funcion y pasa el valor
            >Borrar &times;</button>
        </div>
    </div>
);

//documentacion de codigo
Cita.propTypes = {
    cita : propTypes.object.isRequired,
    eliminarCita : propTypes.func.isRequired
}
    

 
export default Cita;