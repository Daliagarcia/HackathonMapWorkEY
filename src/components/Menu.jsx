import React from 'react'
import '../css/menu.css';
import perfil from '../img/perfil.png'
import single from '../img/single.png'
import team from '../img/team.png';
import cake from '../img/cake.png';
import spaceship from '../img/spaceship.png';
import message from '../img/message.png';
import { NavLink} from 'react-router-dom'
import SignOff from './SignOff';

const Menu = () => {
    return (
    <div className="contmenugeneral">
        <h1 className="titlemenu">COMIENZA TU DÍA</h1>
        <div className="contmenu">
            <div>
                <div className="circlemenu">
                    <NavLink to='/Profile'>
                    <img src={perfil} alt='logo' className="logomenu"/>
                    </NavLink>
                </div>
                    <p className="nameMenu">Perfil</p> 
            </div>

            <div>
                <div className="circlemenu">
                   {/*  <NavLink to='/Single'> */}
                    <img src={single} alt='logo' className="logomenu"/>
               {/*      </NavLink> */}
                </div>
                <p className="nameMenu">Single</p>
            </div>

            <div>
            <div className="circlemenu">
                {/* <NavLink to='/Feedback'> */}
                <img src={message} alt='logo' className="logomenu"/>
             {/*    </NavLink> */}
            </div>
                <p className="nameMenu">Feedback</p>
            </div>

            <div>
                <div className="circlemenu">
                    <NavLink to='/Task'>
                    <img src={spaceship} alt='logo' className="logomenu"/>
                    </NavLink>
                </div>
                <p className="nameMenu">Tareas</p>
            </div>

            <div>
                <div className="circlemenu">
                    {/* <NavLink to='/Team'> */}
                    <img src={team} alt='logo' className="logomenu"/>
                   {/*  </NavLink> */}
                </div>
                <p className="nameMenu">Team</p>
            </div>

            <div>
                <div className="circlemenu">
                 {/*    <NavLink to='/birthday'> */}
                    <img src={cake} alt='logo' className="logomenu"/>
                  {/*   </NavLink> */}
                </div>
                    <p className="nameMenu">Cumpleanos</p>
            </div>
        </div>
        <SignOff />
    </div>
    )
}

export default Menu
