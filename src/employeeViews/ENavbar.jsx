import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import { auth} from '../firebase'
import logoHeader from '../img/logo1.png';
import '../css/navbarpage.css';

class ENavbar extends Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

/*   logOut = () => {
    auth.signOut();
  } */

render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/EmployeeMenu">
        <img src={logoHeader} className="Logo-Header" alt="logo" />
      </NavLink>
{/*     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className={this.getNavLinkClass("/Menu")}><NavLink to="/Menu" >Home</NavLink></li>
      </ul>
      <span className={this.getNavLinkClass("/")} onClick={() => this.logOut("/")}>
        <NavLink to="/">
          <p className="textLogOut">Cerrar sesión</p>
        </NavLink>
      </span>
    </div> */}

  </nav>

    );
  }
}

export default withRouter(ENavbar);