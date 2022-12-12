/*const notesCtrl = {};

const Note = require('../models/Note');
const User = require('../models/User');
const {enviar_mail1} = require('../config/notificaciones');


notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note',{titlepage: 'Agrega una tarea'});
};

// notesCtrl.uploadFile = async(req,res)=>{
//     const newImage = new Image()
//     newImage.url = req.file.location;
//     await newImage.save();

//     res.redirect('/files')
// };

notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body;
     const newNote = new Note({title, description})
    newNote.user = req.user.id;
    try {
        newNote.url = req.file.location; 
    } catch (error) {
        req.flash('error_msg', 'No subiste ningún archivo')
    }
    await newNote.save();

    const mailUser = await User.findById(req.user.id);
    enviar_mail1(mailUser.email);
    req.flash('success_msg', 'Tarea añadida satisfactoriamente');
    res.redirect('/notes')
}

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'});
    res.render('notes/all-notes', {notes,titlepage: 'Pizarra digital Woom'});
}

notesCtrl.renderEditForm = async (req, res) => {
    
    const note = await Note.findById(req.params.id);
    
    if (note.user != req.user.id){
        req.flash('error_msg', 'No tienes permisos para acceder, por favor inicia sesión')
        return res.redirect('/notes');
    }
    res.render('notes/edit-note',{note, titlepage: 'Edita tu tarea'})
    
};

notesCtrl.updateNote = async (req, res) => {
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    req.flash('success_msg', 'Tu tarea ha sido actualizada')
    
    res.redirect('/notes');
}

notesCtrl.deleteNote = async (req, res) => {
    const tarea = await Note.findById(req.params.id);
 
        await Note.findByIdAndDelete(req.params.id);
        req.flash('success_msg', `Se elimino la tarea ${tarea.title}`);
        res.redirect('/notes')

}

// notesCtrl.uploadNote = async(req,res)=>{
//     res.render('notes/upload', {
//         title:'Sube una imagen'
//     })
// }



// notesCtrl.getFiles = async(req,res)=>{
//     const images = await Image.find()
    
//     res.render('notes/files', {
//         title:'Get files',
//         images
//     });
// }

// notesCtrl.getSingleFiles = async(req,res)=>{
//     res.render('notes/upload');
// }

module.exports = notesCtrl*/
