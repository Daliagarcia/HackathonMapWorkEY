import React from 'react'
import { auth, db} from '../firebase'
import firebase from 'firebase';
import imgPerfil from '../img/single.png'
import '../css/profile.css'
import Footer from '../components/Footer';
import ENavbar from './ENavbar';

const EProfile = () => {
  
  const [user, setUser] = React.useState([])
  const [name, setName] = React.useState([])

  //funcion para actualizar el nombre y fotografia del usuario
 /*  React.useEffect(() => { 
    const updateProfileE = () => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: "Jane Q. User",
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
    }
    updateProfileE()
  }) */


    React.useEffect(() => { 
    const obtenerDatos = async () => {
      try {
        const userName = auth.currentUser; 
        console.log('user', userName)
         setName(userName) 
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])  
 
  return (
    <section style={{height:'100vh'}}>
      <ENavbar/>
    <div className="contgeneralPerfil">
          <div className="contPerfil">
            <div>
              <img src={imgPerfil} alt="" className="imgProfile"/>
            </div>
            <div className="contTextProfile">
              <div>
          <p className="textProfile1 textProfile">Manuel Díaz</p>
                 <p className="textProfile2 textProfile">Ingeniero RRHH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="continfo">
            <p className="titleperfil">Frase Típica</p>
            <div className="texts">"Somos lo que hacemos"</div>
            <p className="titleperfil">Especialidad</p>
            <div className="texts">Ingeniero en RRHH</div>
            <p className="titleperfil">Proyecto Actual</p>
            <div className="texts">Mejora de Proceso</div>
            <p className="titleperfil">Cumpleaños</p>
            <div className="texts">24/01/1988</div>
          </div>
          <Footer />
      </section>
  )
}

export default EProfile
