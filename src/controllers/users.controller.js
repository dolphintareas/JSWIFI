const usersCtrl = {};

const User = require('../models/User')
const Note = require('../models/Note')



    // ACCESOS

    //mostrar listado de USUARIOS
   // router.get('/users/all', showUsers);
    usersCtrl.showUsers = async (req, res) => {
        const Users = await User.find().sort({createdAt: 'desc'});
        
        res.render('users/all-users',{Users});
    }

    //editar USUARIOS
   // router.get('/users/edit/:id',renderEditUser);
    usersCtrl.renderEditUser = async (req, res) => {
    
        const user = await User.findById(req.params.id);
        
        res.render('users/edit-user',{user})
        
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
        res.render('users/users-notes', {notes});
    }


module.exports = usersCtrl;