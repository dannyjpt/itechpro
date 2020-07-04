const {Router} = require('express');
const router = Router();

const {obtenerTareaIndex} = require('../controllers/tarea.controllers');

//router.get('/',renderIndex);

router.get('/', obtenerTareaIndex);

//router.get('/proyectos',renderProyectos);


module.exports = router;