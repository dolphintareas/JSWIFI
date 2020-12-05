const {Router} = require('express')
const router = Router()

const { renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote, getFiles} = require('../controllers/notes.controller');
const { upload } = require('../libs/multer');

const {isAuthenticated} = require('../helpers/auth');

//New note
router.get('/notes/add', isAuthenticated, renderNoteForm )

router.post('/notes/new-note', upload, isAuthenticated,createNewNote);

//Get All Note
router.get('/notes', isAuthenticated,renderNotes);

//Edit Notes
router.get('/notes/edit/:id', isAuthenticated,renderEditForm);

router.put('/notes/edit/:id', isAuthenticated, updateNote);

// Delete Notes
router.delete('/notes/delete/:id',isAuthenticated, deleteNote);

//upload
// router.get('/notes/upload', uploadNote);
// router.post('/uploadfile', upload, uploadFile);
// router.get('/files', getFiles);

module.exports = router