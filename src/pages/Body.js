

import React from "react"
import './body.css'
import FormacionAcademica from "./formacionacademica/FormacionAcademica"
import Habilidades from "./habilidades/Habilidades"
import Certificaciones from "./cetificaciones/Certificaciones"
import ExperienciaLaboral from "./experiencialaboral/ExperienciaLaboral"
import ProyectosDesarrollados from "./proyectosdesarrollados/ProyectosDesarrollados"
import FormacionComplementaria from "./formacioncomplementaria/FormacionComplementaria"

export default function Body() {
    return (
        <div className='container-fluid'>

            <Habilidades />
            <FormacionAcademica />
            <Certificaciones />
            <ExperienciaLaboral />
            <ProyectosDesarrollados />
            <FormacionComplementaria />
            
        </div>
    )
}

