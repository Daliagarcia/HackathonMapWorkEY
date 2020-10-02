import React from 'react'
import '../css/menu.css';
import perfil from '../img/single.png'
import map from '../img/map.png'
import team from '../img/team.png';
import cake from '../img/cake.png';
import flag from '../img/flag.png';
import gift from '../img/gift-box.png';
import { NavLink} from 'react-router-dom'
import SignOff from '../components/SignOff';

const EMenu = () => {
    return (
    <div className="contmenugeneral">
        <h1 className="titlemenu">COMIENZA TU DÍA</h1>
        <div className="contmenu">
            <div>
                <div className="circlemenu">
                    <NavLink to='/EmployeeProfile'>
                    <img src={perfil} alt='logo' className="logomenu"/>
                    </NavLink>
                </div>
                    <p className="nameMenu">Perfil</p> 
            </div>

            <div>
                <div className="circlemenu">
                    <NavLink to='/EmployeeMap'>
                    <img src={map} alt='logo' className="logomenu"/>
                    </NavLink>
                </div>
                <p className="nameMenu">Mi Mapa</p>
            </div>

            <div>
            <div className="circlemenu">
              {/*   <NavLink to=''> */}
                <img src={team} alt='logo' className="logomenu"/>
             {/*    </NavLink> */}
            </div>
                <p className="nameMenu">Mi Team</p>
            </div>

            <div>
                <div className="circlemenu">
                   {/*  <NavLink to=''> */}
                    <img src={flag} alt='logo' className="logomenu"/>
                 {/*    </NavLink> */}
                </div>
                <p className="nameMenu">Mi Avance</p>
            </div>

            <div>
                <div className="circlemenu">
                    <NavLink to='/EmployeeCanje'>
                    <img src={gift} alt='logo' className="logomenu"/>
                    </NavLink>
                </div>
                <p className="nameMenu">Canjear Premio</p>
            </div>

            <div>
                <div className="circlemenu">
                   {/*  <NavLink to=''> */}
                    <img src={cake} alt='logo' className="logomenu"/>
                  {/*   </NavLink> */}
                </div>
                    <p className="nameMenu">Cumpleaños</p>
            </div>
        </div>
        <SignOff />
    </div>
    )
}

export default EMenu
