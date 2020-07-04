const blogController = {};
const tarea = require('../models/tarea');
const passport = require('passport');
var {
    Link
} = require('../helpers/auth');

blogController.mostrarBlogs = async (req, res) => {
    //dataUser={'name':req.user.user,'roll':req.user.typeU};
    const muestrablogs = await tarea.find({
        typeT: "blog"
    }).lean();
    if (typeof req.user !== 'undefined') {
        dataUser = {
            'name': req.user.user
        };
        res.render('blogs/mostrarBlogs', {
            muestrablogs,
            dataUser
        });
    } else {
        res.render('blogs/mostrarBlogs', {
            muestrablogs
        });
    }


};
blogController.mostrarBlog = async (req, res) => {
    //dataUser={'name':req.user.user,'roll':req.user.typeU};req.params.id
    const muestrablog = await tarea.findById(req.params.id).lean();
    if (typeof req.user !== 'undefined') {
        dataUser = {
            'name': req.user.user
        };
        res.render('blogs/mostrarBlog', {
            muestrablog,
            dataUser
        });
    } else {
        res.render('blogs/mostrarBlog', {
            muestrablog
        });
    }


};
module.exports = blogController;
