/*const usersCtrl = {};

const User = require('../models/User')
const Note = require('../models/Note')



    // ACCESOS

    //mostrar listado de USUARIOS
   // router.get('/users/all', showUsers);
    usersCtrl.showUsers = async (req, res) => {
        const Users = await User.find().sort({createdAt: 'desc'});
        
        res.render('users/all-users',{Users,titlepage: 'Usuarios registrados'});
    }

    //editar USUARIOS
   // router.get('/users/edit/:id',renderEditUser);
    usersCtrl.renderEditUser = async (req, res) => {
    
        const user = await User.findById(req.params.id);
        
        res.render('users/edit-user',{user, titlepage: 'Editar usuario'})
        
    };


//    router.put('/users/edit/:id', updateUser);
    usersCtrl.updateUser = async (req, res) => {
        const {name, lastname, email, telefono, pais, password} = req.body;
        await User.findByIdAndUpdate(req.params.id, {name, lastname, email, telefono, pais, password})
        req.flash('success_msg', 'Usuario actualizado')
        
        res.redirect('/users/all');
    }
    


    // Delete Curso
    //router.delete('/users/delete/:id', deleteUser);
    usersCtrl.deleteUser = async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
        req.flash('success_msg', 'Curso eliminado');
        res.redirect('/users/all')
    }

    //Get All Note
    //router.get('/users/notes/:id', renderUserNotes);
    usersCtrl.renderUserNotes = async (req, res) => {
        const notes = await Note.find({user: req.params.id}).sort({createdAt: 'desc'});
        const onlyuser = await User.findById(req.params.id);
        res.render('users/users-notes', {notes, onlyuser, titlepage: 'Tareas de usuarios'});
    }

    //Responder USUARIOS
    //router.get('/users/response/:user', isAuthenticated,renderResponseForm);
    usersCtrl.renderResponseForm = async (req, res) => {

        const user = await User.findById(req.params.id);
        
        res.render('users/response-user',{user, titlepage: 'Responder usuario'})
        
    };
    //router.post('/users/response/:user', isAuthenticated, createResponse);
    usersCtrl.createResponse = async (req, res) => {
        const {title, description} = req.body;
        const newNote = new Note({title, description})
        newNote.user = req.params.id;
      
        await newNote.save();
        const usuario = await User.findById(req.params.id);
        req.flash('success_msg', `Respuesta añadida satisfactoriamente para ${usuario.name} ${usuario.id}`);
        res.redirect('/users/all')
    }

module.exports = usersCtrl;*/