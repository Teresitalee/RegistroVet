import React from 'react';
import Cita from './Cita';
import propTypes from 'prop-types';

const ListaCitas = ({citas , eliminarCita}) => {

    //imprimir un mensaje en caso de que no haya ningun paciente agregado
    const mensaje = Object.keys(citas).lenght === 0 ? 'No Hay citas' : 'Administra tus citas aqui';


    return (
         <div className="card mt-2 py-5">
            <div className="card-body">
                <h4 className="card-title text-center mb-2">{mensaje}</h4>
                <div className="list-cita">
                    {citas.map (cita =>
                    <Cita
                     key={cita.id}
                     cita={cita}
                     eliminarCita={eliminarCita}
                    
                     />
                    )}

                </div>
            </div>
        </div> 
    )
}
        
       

//documentacion de codigo
ListaCitas.propTypes = {
    citas : propTypes.array.isRequired,
    eliminarCita : propTypes.func.isRequired
}


 
export default ListaCitas;