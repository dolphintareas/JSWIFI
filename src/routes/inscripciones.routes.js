const {Router} = require('express');
const router = Router();

const {renderInscriptionForm, newInscription, allInscription, renderEditInscription, updateInscription, deleteInscription, cursoPiC, cursoMatlab,
    cursoSolidworks, cursoInventor, cursoLabview, cursoTiaPortal, cursoTekla, cursoAutocad, cursoPlant3d} = require ('../controllers/inscripciones.controller')
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

//temario cursos
router.get('/cursos/inscripciones/MarvinRobot/cursoPicC', cursoPiC);
router.get('/cursos/inscripciones/MarvinRobot/cursoMatlab', cursoMatlab);
router.get('/cursos/inscripciones/MarvinRobot/cursoSolidworks', cursoSolidworks);
router.get('/cursos/inscripciones/MarvinRobot/cursoInventor', cursoInventor);
router.get('/cursos/inscripciones/MarvinRobot/cursoLabview', cursoLabview);
router.get('/cursos/inscripciones/MarvinRobot/cursoTiaPortal', cursoTiaPortal);
router.get('/cursos/inscripciones/MarvinRobot/cursoTekla', cursoTekla);
router.get('/cursos/inscripciones/MarvinRobot/cursoAutocad', cursoAutocad);
router.get('/cursos/inscripciones/MarvinRobot/cursoPlant3d', cursoPlant3d);

module.exports = router;