const {Router} = require('express');
const router = Router();

const {findCourse, showCourses, renderCoursesForm, newCourse, renderEditCourse, updateCourse, deleteCourse, renderInscriptionForm, newInscription, allInscription} = require ('../controllers/cursos.controller')
const {isModerador} = require('../helpers/auth');



//mostrar listado de cursos
router.get('/cursos/all', isModerador, showCourses);

// añadir cursos
router.get('/cursos/add', renderCoursesForm);
router.post('/cursos/add', newCourse);



//editar cursos
router.get('/cursos/edit/:id',isModerador, renderEditCourse);

router.put('/cursos/edit/:id', isModerador, updateCourse);

// Delete Curso
router.delete('/cursos/delete/:id', isModerador, deleteCourse);



//router.get('/users/signup', renderSignUpForm);
//router.post('/users/signup', signup);
//router.get('/users/signin', renderSigninForm);
//router.post('/users/signin', signin);
//router.get('/users/logout', logout);

module.exports = router;