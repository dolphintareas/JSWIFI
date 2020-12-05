const {Router} = require('express');
const router = Router();

const {showUsers, renderEditUser, updateUser, deleteUser, renderUserNotes} = require ('../controllers/users.controller')

const {isAuthenticated, isModerador, isAdmin} = require('../helpers/auth');


// ACCESOS

//mostrar listado de USUARIOS
router.get('/users/all', isAuthenticated, isModerador, showUsers);

//editar USUARIOS
router.get('/users/edit/:id', isModerador,renderEditUser);

router.put('/users/edit/:id', isModerador, updateUser);

// Delete user
router.delete('/users/delete/:id',isAuthenticated, isModerador,deleteUser);

//Get All Note
router.get('/users/notes/:id',renderUserNotes);


module.exports = router;