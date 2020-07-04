
const indexController = {};

indexController.renderIndex=(req,res) =>{
    res.render('index');
};

indexController.renderProyectos=(req,res) =>{
    res.render('proyectos');
};


module.exports = indexController;
