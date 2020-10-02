import React, { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom'
import DataEmployeeMap from '../data/employee-tasks.json';
import { MapProgress }from '../../src/components/MapProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import Footer from '../components/Footer'
import "../css/employeemap.css"
import estrella from '../img/star.png'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    backgroundColor: '#E5E5E5',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
 
  },
}));

export const EmployeeMap = () =>{
  const classes = useStyles()

  const [state, setState] = useState({
    tasks:[],
    selectedTask:undefined,
    modalOpen:false
  });

  useEffect(()=>{
    const tasks = DataEmployeeMap.employeeTasks.employee.tasks
    setState({tasks:tasks})
  },[]); 

  const onTaskChange = (completed = true, id) =>{    
      setState(prevState=>({
        tasks: prevState.tasks.map((task)=>{
          if (task.id === id){
            task.completed=completed          
          }
          return task
        })
      }))
    }

  const handleClose = ()=>{
    setState( prevState => {
      return (
        {
          ...prevState,
          modalOpen: false,
          selectedTask:undefined
        }
      )
    })
  }

  const handleOpen = (selectedTask)=>{ 
    setState( prevState => {
      return (
        {
          ...prevState,
          modalOpen: true,
          selectedTask:selectedTask
        }
      )
    })
  }

  const completedTask = () => {
    //Paso 1 Guardar como completado el task actual (El que está cargado en el state)
    
    //Paso 2 Cerrar la modal
    handleClose()
  }

  const body = (
    <div className={`${classes.paper} center`}>
    
      <h2 id="simple-modal-title" style={{textAlign:'center'}}>¡Felicidades!</h2>
      <div className="contestar">
        <img src={estrella} alt="" className="starmodal"/>
        <img src={estrella} alt="" className="starmodal"/>
        <img src={estrella} alt="" className="starmodal"/>
      </div>
      <p id="simple-modal-description" style={{textAlign:'center'}}>
        Cumpliste con tu tarea de manera exitosa 
      </p>

      <textarea 
        placeholder="Cuentanos cómo lograste cumplir con tu tarea asignada"
        className="textAreaModal">
      </textarea>
      <div className="contbotonmodal">
        <button className="buttonTexArear"
            onClick={completedTask}> Enviar
        </button>
      </div>
    </div>
  );
    
  return(
    <div>
      <Modal className= "modalEmployeeMap"
        open={state.modalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
        <MapProgress
          tasks={state.tasks} 
          onTaskChange ={onTaskChange}
          handleOpen = {handleOpen}/>
  
        <Footer />
    </div>
  )
};
export default EmployeeMap