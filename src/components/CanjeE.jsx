import React from 'react'
import NavbarPage from '../leaderViews/NavbarPage'
import Footer from './Footer'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import '../css/canje.css'
import star from '../img/star.png'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import happy from '../img/happy.png'
import { NavLink} from 'react-router-dom'
import ENavbar from '../employeeViews/ENavbar';

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
const CanjeE = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    const classes = useStyles();
    return (
        <>
        <ENavbar />
        <div className="contgeneralpremio">
            <h2>Canjea tus premios</h2>

            <div className="contpremio">
                <input type="radio"/>
                <AccessTimeIcon />
                <p>Puedes 30 minutos después de la hora de entrada el día viernes </p>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                    <img src={star} className="starcanje"></img>
                    <p>30</p>
                </div>
            </div>
            <div className="contpremio">
                <input type="radio"/>
                <AccessTimeIcon />
                <p>Puedes 30 minutos después de la hora de entrada el día viernes </p>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                    <img src={star} className="starcanje"></img>
                    <p>30</p>
                </div>
            </div>
            <div className="contpremio">
                <input type="radio"/>
                <AccessTimeIcon />
                <p>Puedes 30 minutos después de la hora de entrada el día viernes </p>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                    <img src={star} className="starcanje"></img>
                    <p>30</p>
                </div>
            </div>
            <div style={{display:'flex'}}>
    {/*             <NavLink to='/Menu'>
                    <button className="btnVolver">
                        Volver
                    </button>
                </NavLink> */}
                <button onClick={handleOpen} color="primary" className="btncanjear">
                        canjear
                </button>
            </div>
        </div>
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
                <h2 id="transition-modal-title">¡YA LO CANJEASTE!</h2>
                <p id="transition-modal-description">
                  Ha sido enviado al líder de tu área el premio que seleccionaste, ya lo podrás disfrutar
                </p>
                <img src={happy} alt="" style={{width:"30px"}}/>
              </div>
            </Fade>
          </Modal>
        <Footer />
    </>
    )
}

export default CanjeE
