const {
    Router
} = require('express');
const router = Router();

const {
    mostrarTarea,
    crearTarea,
    obtenerTarea,
    obtenerTodasTareas,
    editarTarea,
    actualizarTarea,
    eliminarTarea,
    obtenerKits,
    obtenerRecurso
} = require('../controllers/tarea.controllers');
const {
    isAuthenticated,
    permissions
} = require('../helpers/auth');

//nueva tarea
router.get('/tarea/nuevo', permissions, mostrarTarea);

router.post('/tarea/crear', permissions, crearTarea);

//obtener tareas
router.get('/tarea/mostrar', permissions, obtenerTarea);
//obtener todas tareas
router.get('/tarea/mostrar/todo', obtenerTodasTareas);

//editar tareas
router.get('/tarea/editar/:id', permissions, editarTarea);

//actualizar tarea
router.put('/tarea/actualizar/:id', permissions, actualizarTarea);

//eliminar tarea
router.delete('/tarea/eliminar/:id', permissions, eliminarTarea);

//mostrar kits
router.get('/tarea/kits', obtenerKits);

//mostrar tarea especifica
router.get('/tarea/recurso/:id', obtenerRecurso);

module.exports = router;
