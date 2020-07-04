const {Router} = require('express');
const router = Router();

const {mostrarBlogs,mostrarBlog} = require('../controllers/blog.controllers');
const {isAuthenticated,permissions} = require('../helpers/auth');

//nueva tarea
router.get('/blogs/mostrar-todos', mostrarBlogs);
router.get('/blogs/mostrar/:id', mostrarBlog);

module.exports = router;