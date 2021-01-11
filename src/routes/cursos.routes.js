const {Router} = require('express');
const router = Router();

const {findCourse, showCourses, renderCoursesForm, newCourse, renderEditCourse, updateCourse, deleteCourse, renderPaymentForm, Payment, renderWoomStoreForm, WoomStore, renderAulaVirtual} = require ('../controllers/cursos.controller')
const {isModerador} = require('../helpers/auth');



//mostrar listado de cursos
router.get('/cursos/all', isModerador, showCourses);

// añadir cursos
router.get('/cursos/add', renderCoursesForm);
router.post('/cursos/add', newCourse);

//aula virtual
router.get('/cursos/classroom', renderAulaVirtual);


//editar cursos
router.get('/cursos/edit/:id',isModerador, renderEditCourse);

router.put('/cursos/edit/:id', isModerador, updateCourse);

// Delete Curso
router.delete('/cursos/delete/:id', isModerador, deleteCourse);

//medios de pago

router.get('/payment', renderPaymentForm);

router.post('/payment', Payment);

//woomstore
router.get('/woomstore', renderWoomStoreForm);

router.post('/woomstore', WoomStore);

//router.get('/users/signup', renderSignUpForm);
//router.post('/users/signup', signup);
//router.get('/users/signin', renderSigninForm);
//router.post('/users/signin', signin);
//router.get('/users/logout', logout);

module.exports = router;