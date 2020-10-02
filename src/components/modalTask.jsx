import React from 'react'
import { db} from '../firebase'

const modalTask = () => {

    const [tareas, setTareas] = React.useState([])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
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
            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"¿Eliminar Publicación?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Puedes editarla si solo necesitas cambiar algo.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button  onClick={() => eliminar(postId)} color="primary" autoFocus>
                        Eliminar
                    </Button>
                    </DialogActions>
                </Dialog>
        </>
    )
}

export default modalTask
