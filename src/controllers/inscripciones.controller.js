const inscripcionesCtrl = {};

const passport = require('passport');

const Inscripcion = require('../models/Inscripciones')
const mailer = require('../config/notificacionesInscripcion');

//router.get('/cursos/inscribir', renderInscriptionForm);
inscripcionesCtrl.renderInscriptionForm = (req, res) => {
    
    res.render('cursos/new-inscription',{titlepage: 'Cursos Marvin Robot'});
}

//router.post('/cursos/inscribir', newInscription);
inscripcionesCtrl.newInscription = async (req, res) =>{
    const errors = [];
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const {nombreinscr, emailinscr,contacto, nombre, cupon} = req.body;
    if(!regexEmail.test(emailinscr)){
        errors.push({text:'Ingresa un email válido'});  
    }

    if (errors.length>0){
       
        res.render('cursos/new-inscription',{
            errors,
            nombreinscr,
            emailinscr,
            contacto,
            nombre,
            cupon,
        })
    } else{
       
            const newInscription = new Inscripcion({nombreinscr, emailinscr,contacto, nombre, cupon});
            
            await newInscription.save();

            mailer.enviar_mail(newInscription.emailinscr, newInscription.nombreinscr);
            res.render('cursos/success-inscription',{newInscription, titlepage: 'Estás inscrito al curso'});
    }
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

//cursos

//cursoPiC, cursoMatlab, cursoSolidworks, cursoInventor, cursoLabview, cursoTiaPortal, cursoTekla, cursoAutocad, cursoPlant3d
inscripcionesCtrl.cursoPiC = (req, res) => { 
    res.render('cursos/infoPicC',{titlepage: 'Temario de Curso Microcontroladores con PIC C'});
}

inscripcionesCtrl.cursoMatlab = (req, res) => { 
    res.render('cursos/infoMatlab',{titlepage: 'Temario de Curso Matlab'});
}

inscripcionesCtrl.cursoSolidworks = (req, res) => { 
    res.render('cursos/infoSolidworks',{titlepage: 'Temario de Curso Solidworks'});
}

inscripcionesCtrl.cursoInventor = (req, res) => { 
    res.render('cursos/infoInventor',{titlepage: 'Temario de Curso Inventor'});
}

inscripcionesCtrl.cursoLabview = (req, res) => { 
    res.render('cursos/infoLabview',{titlepage: 'Temario de Curso Labview'});
}

inscripcionesCtrl.cursoTiaPortal = (req, res) => { 
    res.render('cursos/infoTiaportal',{titlepage: 'Temario de Curso Tia Portal'});
}

inscripcionesCtrl.cursoTekla = (req, res) => { 
    res.render('cursos/infoTekla',{titlepage: 'Temario de Curso Tekla'});
}

inscripcionesCtrl.cursoAutocad = (req, res) => { 
    res.render('cursos/infoAutocad',{titlepage: 'Temario de Curso Autocad'});
}

inscripcionesCtrl.cursoPlant3d = (req, res) => { 
    res.render('cursos/infoPlant3d',{titlepage: 'Temario de Curso Plant 3d'});
}

inscripcionesCtrl.cursoArduino = (req, res) => { 
    res.render('cursos/infoArduino',{titlepage: 'Temario de Curso Arduino'});
}


module.exports = inscripcionesCtrl;