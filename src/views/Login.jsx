import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { db, auth } from '../firebase'


const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const procesarDatos = e => {
        e.preventDefault()

        if (!email.trim()) {
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        if (!pass.trim()) {
            console.log('Datos vacíos pass!')
            setError('Datos vacíos pass!')
            return
        }
        if (pass.length < 6) {
            console.log('6 o más carácteres')
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)
    }

    const login = React.useCallback(async () => {
         try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            setEmail('')
            setPass('')
            setError(null)
            db.collection("users").doc(res.user.uid).get().then((snap) => {
                const user = snap.data();
                console.log('entro', user)
                  if (user.perfil === "lider"){
                  props.history.push("/Menu")
                } else {
                    props.history.push('/EmployeeMenu')
                }  
              }) 
             } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('Usuario o contraseña incorrecta')
            }
            if (error.code === 'auth/wrong-password') {
                setError('Usuario o contraseña incorrecta')
            }
            console.log(error.code)
            console.log(error.message)
        }
    }, [email, pass, props.history])

    return (
        <Fragment>
               <div >
                  <div >
                      <form onSubmit={procesarDatos} className="formLogin" >
                          <div className="alert alert-danger">
                              {error}
                          </div>
                          <div>
                              <input
                                  placeholder="Correo electronico"
                                  type="email"
                                  onChange={e => setEmail(e.target.value)}
                                  value={email} />
                          </div>
                          <div>
                              <input
                                  placeholder="Contraseña"
                                  type="password"
                                  onChange={e => setPass(e.target.value)}
                                  value={pass} />
                          </div>
                          <div>
                              <button
                                  onClick={() => login()}
                              >Iniciar sesion</button>
                          </div>
                          <div>
                          <Link to="/password"> <p>¿Olvidó su Contraseña? </p></Link>
                          </div>
                          <div>
                          <Link to='/registro' ><button id="botonRegistrate"> Registro</button></Link>
                          </div>
                      </form>
                  </div>
              </div> 
            </Fragment>
    )
}

export default withRouter(Login)
