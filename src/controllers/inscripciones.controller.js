const inscripcionesCtrl = {};

const passport = require('passport');

const Inscripcion = require('../models/Inscripciones')


//router.get('/cursos/inscribir', renderInscriptionForm);
inscripcionesCtrl.renderInscriptionForm = (req, res) => {
    
    res.render('cursos/new-inscription',{titlepage: 'Cursos Marvin Robot'});
}

//router.post('/cursos/inscribir', newInscription);
inscripcionesCtrl.newInscription = async (req, res) =>{
    
    const {nombreinscr, emailinscr,contacto, nombre, cupon} = req.body;
            const newInscription = new Inscripcion({nombreinscr, emailinscr,contacto, nombre, cupon});
            
            await newInscription.save();
            res.render('cursos/success-inscription',{newInscription, titlepage: 'Estás inscrito al curso'});
};

//router.get('/cursos/inscripciones', allInscription);
inscripcionesCtrl.allInscription = async (req, res) => {
    const inscripciones = await Inscripcion.find().sort({createdAt: 'desc'});
    res.render('cursos/all-inscripciones',{inscripciones, titlepage: 'Usuarios inscritos'});
};

//editar inscripcion
//router.get('/cursos/inscripciones/MarvinRobot/edit/:id',isModerador, renderEditInscription);
inscripcionesCtrl.renderEditInscription = async (req, res) => {
    
    const inscripcion = await Inscripcion.findById(req.params.id);
    
    res.render('cursos/edit-inscripcion',{inscripcion, titlepage: 'Editar Alumno'})
    
};

//router.put('/cursos/inscripciones/MarvinRobot/edit/:id', isModerador, updateInscription);
inscripcionesCtrl.updateInscription = async (req, res) => {
    const {nombreinscr, emailinscr, contacto, nombre} = req.body;
    await Inscripcion.findByIdAndUpdate(req.params.id, {nombreinscr, emailinscr, contacto, nombre})
    req.flash('success_msg', 'Alumno actualizado')
    
    res.redirect('/cursos/inscripciones');
}

inscripcionesCtrl.deleteInscription = async (req, res) => {
    await Inscripcion.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Alumno eliminado');
    res.redirect('/cursos/inscripciones')
}

module.exports = inscripcionesCtrl;