const {Router} = require('express');
const router = Router();

const {renderInscriptionForm, newInscription, allInscription, renderEditInscription, updateInscription, deleteInscription} = require ('../controllers/inscripciones.controller')
const {isModerador, isAuthenticated} = require('../helpers/auth');




// inscribir cursos
router.get('/cursos/inscripcion/MarvinRobot', renderInscriptionForm);
router.post('/cursos/inscripcion/MarvinRobot', newInscription);

//mostrar todas inscripciones
router.get('/cursos/inscripciones',isAuthenticated, isModerador, allInscription);


//editar inscripcion
router.get('/cursos/inscripciones/MarvinRobot/edit/:id',isAuthenticated,isModerador, renderEditInscription);

router.put('/cursos/inscripciones/MarvinRobot/edit/:id',isAuthenticated, isModerador, updateInscription);

// Delete inscripcion
router.delete('/cursos/inscripciones/MarvinRobot/delete/:id', isAuthenticated, isModerador, deleteInscription);


module.exports = router;