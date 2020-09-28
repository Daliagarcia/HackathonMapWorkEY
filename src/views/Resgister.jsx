import React from 'react'
import 'date-fns';
import { db, auth } from '../firebase'
import { makeStyles} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {       
      margin: theme.spacing(1), 
      width: 200,
    },
  },
}));

const Resgister = (props) => {

  const classes = useStyles();
  const [profile, setProfile] = React.useState('');
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [birthday, setBirthday] = React.useState(new Date('2014-08-18T21:11:54'));
  const [error, setError] = React.useState(null)

  const handleDateChange = (date) => {
    setBirthday(date)
  }; 

  const procesarDatos = e => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Datos vacíos nombre!')
      return
  }
    if (!email.trim()) {
        setError('Datos vacíos email!')
        return
    }
    if (!pass.trim()) {
        setError('Datos vacíos pass!')
        return
    }
    if (pass.length < 6) {
        setError('6 o más carácteres en pass')
        return
    }
    if (!profile.trim()) {
      setError('Datos vacíos perfil!')
      return
    }
    if (!birthday.trim()) {
      setError('Datos vacíos cumpleaños!')
      return
  }
    console.log('correcto...')
    setError(null)
}

  const register = React.useCallback(async () => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, pass)
        await db.collection('users').doc(res.user.uid).set({
            fechaCreacion: Date.now(),
            name: name,
            email: email,
            password: pass,
            perfil: profile,
            cumple: birthday,
            photoURL: res.user.photoURL,
            uid: res.user.uid
        })
        setProfile('');
        setName('')
        setEmail('')
        setPass('')
        setBirthday('2014-08-18T21:11:54')
        setError(null)
        db.collection("users").doc(res.user.uid).get().then((snap) => {
            const user = snap.data();
            console.log('user', user)
         }) 
    } catch (error) {
        console.log(error)
         setError(error.message)
        if (error.code === 'auth/email-already-in-use') {
            setError('Usuario ya registrado...')
            return
        }
        if (error.code === 'auth/invalid-email') {
            setError('Email no válido')
            return
        }
    }
}, [name, email, pass,profile, birthday])
 

  return (
    <>
    <form className={classes.root} noValidate autoComplete="off"
    onSubmit={procesarDatos}  
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '144px',
    }}>
        <div className="alert alert-danger">{error}</div>
          <TextField
            label="Nombre"
            id="outlined-size-small"
            /* defaultValue="Small"  */
            variant="outlined"
            size="small"
            onChange={e => setName(e.target.value)}
            value={name} 
          />
          <TextField
            label="Correo Electrónico"
            id="outlined-size-small"
          /*  defaultValue="Small" */
            variant="outlined"
            size="small"
            onChange={e => setEmail(e.target.value)}
            value={email} 
            type="email"
          />
          <TextField
            label="Contraseña"
            id="outlined-size-small"
          /*  defaultValue="Small" */
            variant="outlined"
            size="small"
            onChange={e => setPass(e.target.value)}
            value={pass} 
            type="password"
          />
          <div>
            <InputLabel htmlFor="demo-customized-select-native">
              Perfil
            </InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              label="Perfil"
              value={profile}
              onChange={e => setProfile(e.target.value)}
            >
              <option aria-label="None" value="" />
              <option value='lider'>Lider</option>
              <option value='trabajador'>Trabajador</option>
            </NativeSelect>
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Fecha de nacimiento"
              format="MM/dd/yyyy"
              onChange={handleDateChange}
              value={birthday} 
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
        </MuiPickersUtilsProvider>
        <Button variant="contained" color="secondary" onClick={() => register()}>
          Registrar
        </Button>
      </form>
    </>
  )
}

export default Resgister