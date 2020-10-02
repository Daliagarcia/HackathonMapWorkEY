import React from 'react'
import { db} from '../firebase'
import '../css/addtaks.css'
import NavbarPage from '../leaderViews/NavbarPage'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddTaks = () => {
    
  const [tareas, setTareas] = React.useState([])
  const [tarea, setTarea] = React.useState('')
  const [fecha, setFecha] = React.useState('')
  const [describ, setDescrib] = React.useState('')
  const [nivel, setNivel] = React.useState('')
  const [asignar, setAsignar] = React.useState('')
  const [start, setStart] = React.useState(0)

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const add = async (e) => {
        e.preventDefault()
    
        if(!tarea.trim()){
          console.log('está vacio')
          return
        }
        
        try {
          const nuevaTarea = {
            name: tarea,
            fecha: Date.now(), 
            descripcion: describ,
            nivel: nivel,
            estado: 'pendding',
            estrellas: start,
          }
          const data = await db.collection('tareas').add(nuevaTarea)
          setTareas([
            ...tareas,
            {...nuevaTarea, id: data.id}
          ])
    
          setTarea('')
          setFecha('')
          setDescrib('')
          setNivel('')
          setAsignar('')
          
        } catch (error) {
          console.log(error)
        }
        console.log(tarea)
      }
    

    return (
      <>
      <NavbarPage/>
     <div className="contGeneralAddTask">
      <div className="titleAddTask">
        ASIGNAR TAREA
      </div>
        <div className="formAddTask">
            <form className="formTarea">
              <p>Nombre Tarea</p>
            <input 
              type="text"
              placeholder="Ingrese tarea"
              className="inputTarea"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            <p>Fecha ingreso de tarea</p>
            <input 
              type="date"
              placeholder="Fecha"
              className="inputTarea"
              onChange={e => setFecha(e.target.value)}
              value={fecha}
            />
            <p>Descripcion de tarea</p>
            <input 
              type="text"
              placeholder="Descripción"
              className="inputTarea"
              onChange={e => setDescrib(e.target.value)}
              value={describ}
            />
            
            <div className="contAddTask">
            <p>Asignar</p>
               <button 
                type="button" 
            className="btnAddTask"
            onClick={handleOpen}
            >
            Single
            </button>
            <button 
             type="button" 
            className="btnAddTask"
            onClick={handleOpen}
            >
            Team
            </button>
            </div>
            {/* <select name="select" value={asignar} onChange={e => setAsignar(e.target.value)} className="inputTarea">
                <option aria-label="None" value="" />
                <option value="single">Single</option> 
                <option value="team">Team</option>
            </select> */}
            <div className="contNivelDificultad">
            <p>Nivel de dificultad</p>
            <select name="select" value={nivel} onChange={e => setNivel(e.target.value)} className="inputTarea">
                <option aria-label="Selecciona el nivel" value="" />
                <option value="nivel1">Nivel 1</option> 
                <option value="nivel2">Nivel 2</option>
                <option value="nivel3">Nivel 3</option>
            </select>
            </div>
            <button 
            className="btnAddTaskFinal"
            onClick={add}
            >
            Agregar
            </button>
          </form>
        </div>
        </div>

        <div>
{/*         <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">SINGLE</h2>
                <p id="transition-modal-description">
                <p>Manuel Díaz</p>
                </p>
              </div>
            </Fade>
          </Modal>
        </div>

        <Footer/>
        </>
    )
}

export default AddTaks
