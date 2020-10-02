import React from 'react'
import SignOff from '../components/SignOff'
import jugador from '../img/jugador.png'
import '../css/emap.css'
import { db} from '../firebase'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const EMap = () => {

  const [tareas, setTareas] = React.useState([])
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState('');

  const handleClickOpen = () => {
      setOpen(true);
/*       setDescription(e.target.value) */
  };

  const handleClose = () => {
      setOpen(false);
      
  };

  React.useEffect(() => {

    const obtenerDatos = async () => {
      try {
        const data = await db.collection('tareas').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log(arrayData)
        setTareas(arrayData)
        
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])

  
  return (
    <>
    <div>
      <h1>Aquí verás el mapa de trabajo</h1>
  
      {
        tareas.map(item =>
          <>
      <div className="contMap">
        <div className="contAvatar" key={item.id}>
          <img src={jugador} alt="" className="avatarmap" onClick={handleClickOpen} value={item.id} /* onChange={e = () => setDescription(e.target.value)} */ />
          <div className="circulo"  ></div>
        </div>
      </div>
               <Dialog
               open={open}
               onClose={handleClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
           >
               <DialogTitle id="alert-dialog-title">{"Tarea"}</DialogTitle>
               <DialogContent>
               <DialogContentText id="alert-dialog-description">
               {/* {description} */}{item.descripcion}
               </DialogContentText>
               </DialogContent>
               <DialogActions>
               <Button onClick={handleClose} color="primary">
                   Cancelar
               </Button>
     {/*           <Button  onClick={() => eliminar(postId)} color="primary" autoFocus>
                   Eliminar
               </Button> */}
               </DialogActions>
           </Dialog>
           </>
         )}
    </div>

 

      </>
  )
}

export default EMap
