import React from 'react'
import Footer from '../components/Footer'
import '../css/task.css'
import NavbarPage from './NavbarPage'
import plugin from '../img/plugin.png';
import idea from '../img/idea.png';
import map from '../img/map.png';
import { NavLink} from 'react-router-dom'


const Task = () => {
    return (
        <>
        <NavbarPage />
        <div className="titleTask">
                TAREAS LIDER
            </div>

        <div className="contGeneralTask">         
            <div>
            <div className="contTask">
              {/*   <NavLink to='/CrearTeam'> */}
                <img src={plugin} alt='logo' className="logoplugin"/>
               {/*  </NavLink> */}
            </div>
                <p className="namelogoplugin">Crear Team</p>
            </div>

            <div>
            <div className="contTask">
                <NavLink to='/AddTaks'>
                <img src={idea} alt='logo' className="logoplugin"/>
                </NavLink>
            </div>
                <p className="namelogoplugin">Agregar Tarea</p>
            </div>

            <div>
            <div className="contTask">
                <NavLink to='/Map'>
                <img src={map} alt='logo' className="logoplugin"/>
                </NavLink>
            </div>
                <p className="namelogoplugin">Mapa de Tareas</p>
            </div>

            </div>
        <Footer/>
        </>
    )
}

export default Task
