const tareaController = {};
const tarea = require('../models/tarea');
const passport = require('passport');
var {
    Link
} = require('../helpers/auth');

tareaController.mostrarTarea = (req, res) => {
    dataUser = {
        'name': req.user.user,
        'roll': req.user.typeU
    };
    res.render('tareas/nuevatarea', {
        dataUser
    });
};

tareaController.crearTarea = async (req, res) => {
    const {
        title,
        description,
        image,
        typeT,
        urlVideo,
        price
    } = req.body;
    const nuevaTarea = new tarea({
        title,
        description,
        image,
        typeT,
        urlVideo,
        price
    });
    await nuevaTarea.save();
    req.flash('mensaje', 'Tarea agregada');
    res.redirect('/tarea/mostrar');

};

tareaController.obtenerTareaIndex = async (req, res) => {
    var dataUser;
    var loader = true;
    var indexMenu = true;
    if (typeof req.user !== 'undefined') {
        if (req.user.typeU == 'admin') {
            dataUser = {
                'name': req.user.user,
                'roll': req.user.typeU
            };
            //const muestraTareasIndex = await tarea.find().lean();
            const muestraTareasIndex = await tarea.find({
                typeT: "proyecto"
            }).limit(3).lean();
            const actividades = await tarea.find({
                typeT: "tutorial"
            }).limit(3).lean();
            //console.log(muestraTareasIndex);
            res.render('index', {
                muestraTareasIndex,
                actividades,
                dataUser,
                loader,
                indexMenu
            });
        } else {
            dataUser = {
                'name': req.user.user
            };
            const muestraTareasIndex = await tarea.find({
                typeT: "proyecto"
            }).limit(3).lean();
            const actividades = await tarea.find({
                typeT: "tutorial"
            }).limit(3).lean();
            //console.log(muestraTareasIndex);
            res.render('index', {
                muestraTareasIndex,
                actividades,
                dataUser,
                loader,
                indexMenu
            });
        }

    } else {
        const muestraTareasIndex = await tarea.find({
            typeT: "proyecto"
        }).limit(3).lean();
        const actividades = await tarea.find({
            typeT: "tutorial"
        }).limit(3).lean();
        console.log(muestraTareasIndex);
        res.render('index', {
            muestraTareasIndex,
            actividades,
            loader,
            indexMenu
        });
    }

};

tareaController.obtenerTodasTareas = async (req, res) => {
    var loader = true;
    const muestraTareasIndex = await tarea.find({
        typeT: "proyecto"
    }).lean();
    const actividades = await tarea.find({
        typeT: "tutorial"
    }).lean();
    if (typeof req.user !== 'undefined') {
        dataUser = {
            'name': req.user.user
        };
        res.render('tareas/mostrartodo', {
            muestraTareasIndex,
            actividades,
            loader,
            dataUser
        });
    } else {
        res.render('tareas/mostrartodo', {
            muestraTareasIndex,
            actividades,
            loader
        });
    }
    //console.log(muestraTareasIndex);



};

tareaController.obtenerTarea = async (req, res) => {
    const muestraTareas = await tarea.find().lean();
    dataUser = {
        'name': req.user.user,
        'roll': req.user.typeU
    };
    var loader = true;
    res.render('tareas/mostrarTareas', {
        muestraTareas,
        dataUser,
        loader
    });
};

tareaController.editarTarea = async (req, res) => {
    const tareaEditar = await tarea.findById(req.params.id).lean();
    dataUser = {
        'name': req.user.user,
        'roll': req.user.typeU
    };
    res.render('tareas/editarTarea', {
        tareaEditar,
        dataUser
    });
};

tareaController.actualizarTarea = async (req, res) => {
    const {
        title,
        description,
        image,
        typeT,
        urlVideo,
        price
    } = req.body;
    await tarea.findByIdAndUpdate(req.params.id, {
        title,
        description,
        image,
        typeT,
        urlVideo,
        price
    });
    req.flash('mensaje', 'Tarea actualizada');
    res.redirect('/tarea/mostrar');
};

tareaController.eliminarTarea = async (req, res) => {
    await tarea.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    req.flash('mensaje', 'Tarea eliminada');
    res.redirect('/tarea/mostrar');
};

tareaController.obtenerKits = async (req, res) => {
    const muestrakits = await tarea.find({
        typeT: "kit"
    }).lean();
    if (typeof req.user !== 'undefined') {
        dataUser = {
            'name': req.user.user
        };
        res.render('tareas/kits', {
            muestrakits,
            dataUser
        });
    } else {
        res.render('tareas/kits', {
            muestrakits
        });
    }

};

tareaController.obtenerRecurso = async (req, res) => {
    const recurso = await tarea.findById(req.params.id).lean();
    if (typeof req.user !== 'undefined') {
        dataUser = {
            'name': req.user.user
        };

        if (recurso.typeT == "tutorial") {

            const muestratutorial = recurso;
            res.render('tareas/mostrarRecurso', {
                muestratutorial,
                dataUser
            });

        } else if (recurso.typeT == "proyecto") {

            const muestraproyecto = recurso;
            res.render('tareas/mostrarRecurso', {
                muestraproyecto,
                dataUser
            });

        }

    } else {

        if (recurso.typeT == "tutorial") {

            const muestratutorial = recurso;
            res.render('tareas/mostrarRecurso', {
                muestratutorial
            });

        } else if (recurso.typeT == "proyecto") {

            const muestraproyecto = recurso;
            res.render('tareas/mostrarRecurso', {
                muestraproyecto
            });

        }
    }



};

module.exports = tareaController;
