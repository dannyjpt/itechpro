const express = require('express');
const exp_hbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
//inicializaciones
const app = express();
require('./config/passport');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views' ));
app.engine('.hbs', exp_hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//variables globales
app.use((req,res,next) => {
    res.locals.mensaje = req.flash('mensaje');
    res.locals.mensaje_error = req.flash('mensaje_error');
    res.locals.error = req.flash('error');
    res.locals.data = req.flash('data');
    res.locals.users = req.user || null;
    next();
});
var probes;
//routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/tareas.routes'));
app.use(require('./routes/usuarios.routes'));
app.use(require('./routes/blogs.routes'));

//archivos estáticos
app.use(express.static(path.join(__dirname, '/public' )));
module.exports = app;