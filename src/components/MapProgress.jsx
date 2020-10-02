import React from "react";
import SignOff from "../components/SignOff";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink} from 'react-router-dom'
import { CheckBox } from "@material-ui/icons";
import "../css/emap.css"

const completedTaskStyles = {
  contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};

const incompletedTaskStyles = {
  contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  iconStyle: { background: "red", color: "#fff" },
};

export const MapProgress = ({ tasks = [], onTaskChange, handleOpen}) => {
  const oncheckBoxChange = (value, task)=> {
    const checked = value === "on" ? true : false

    if (checked){
      handleOpen(task)
    }

    //  if ( onTaskChange ){
    //   onTaskChange (checked, taskId)
    // }
  }
  return (
    <div className="contgeneralmap">
      <h3>Mapa de Tareas</h3>
      <VerticalTimeline>
        {tasks.map((task, index) => {
          const styles = task.completed ? completedTaskStyles : incompletedTaskStyles
          return (
            <VerticalTimelineElement key={index}
              className="vertical-timeline-element--work"
              icon={<FontAwesomeIcon icon="address-card" />}
              {...styles}>
              <h3 className="vertical-timeline-element-title">
                {task.nameTask}
              </h3>              
              <p>
                {task.descriptionTask}
              </p>
              {task.completed ? <h4>Tarea Completada</h4> : <h4>Pendiente</h4>}
                {task.completed ? null : <input 
                type = "checkbox"
                onChange = {(event)=>
                oncheckBoxChange(event.target.value, task)} />}

              {/* <input 
                type = "checkbox"
                onChange = {(event)=> oncheckBoxChange(event.target.value, task)} /> */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>     
      <div className="contButtonMap">
{/*         <NavLink to='/Menu'>
          <button className="btnVolver">
            Volver
          </button>
        </NavLink> */}
        <NavLink to='/Canje'>
          <button className="btncanjear">
            Canjear Premio
          </button>
        </NavLink>
      </div> 
    </div>
  );
};
export default MapProgress