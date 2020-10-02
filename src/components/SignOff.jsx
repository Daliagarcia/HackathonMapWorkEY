import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { auth} from '../firebase'

class SignOff extends React.Component {

    getNavLinkClass = (path) => {
      return this.props.location.pathname === path ? 'active' : '';
    }
  
    logOut = () => {
      auth.signOut();
    }
  
    render() {
      return (
        <>
             <span className={this.getNavLinkClass("/")} onClick={() => this.logOut("/login")}>
              <NavLink to="/">
                <button className="btncanjear">Cerrar sesión</button>
              </NavLink>
            </span>
        </>
      )
    }
  };
  SignOff = withRouter(SignOff);
  export default SignOff;


/* import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import grey from '@material-ui/core/colors/grey';
import { auth} from '../firebase'

const SignOff = (props) => {
  
    const signoff = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/')
            })
    }

    return (
        <div>
            <IconButton color="primary" aria-label="add to shopping cart" onClick={signoff}>
                <PowerSettingsNewIcon style={{ color: grey[900] }}/>
            </IconButton>
        </div>
        
    )
}

export default SignOff */
