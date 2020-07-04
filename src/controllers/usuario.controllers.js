const usuarioController = {};
const usuario = require('../models/user');
const passport = require('passport');



usuarioController.nuevoUsuario = (req, res) => {
    res.render('usuarios/registro');
};

usuarioController.registrarUsuario=async (req,res) =>{
    const errores = [];
    const {user, email, password, password2, typeU} = req.body;
    if(password != password2){
       errores.push({text:'las contraseñas no coinciden'}); 
    }
    if(password.length < 4){
        errores.push({text:'la contraseña debe contener mas de 4 caracteres'});
    }
    if(errores.length > 0){
        res.render('usuarios/registro',{
            errores,
            user,
            email
        });
    } else{
        const correoUsuario = await usuario.findOne({email:email});
        if(correoUsuario){
            req.flash('mensaje_error', 'El correo ya está registrado en nuestra plataforma');
            res.redirect('/usuarios/registrar');
        }else{
            const nuevoUsuario = new usuario({user, email, password, typeU});
            nuevoUsuario.password = await nuevoUsuario.encryptPassword(password);
            await nuevoUsuario.save();
            req.flash('mensaje', 'Usuario registrado');
            res.redirect('/usuarios/inicio-sesion');
        }
    }
    //res.send('registrado');
};

usuarioController.mostrarInicioSesionUsuario=(req,res) =>{
    res.render('usuarios/inicio-sesion');
};

usuarioController.iniciarSesionUsuario=passport.authenticate('local',{
    failureRedirect:'/usuarios/inicio-sesion',
    successRedirect:'/',
    failureFlash:true
});

usuarioController.cerrarSesionUsuario=(req,res) =>{
    req.logout();
    req.flash('mensaje','Sesion finalizada');
    res.redirect('/usuarios/inicio-sesion');
};



module.exports = usuarioController;