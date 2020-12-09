const{model, Schema} = require('mongoose')

const InscripcionSchema = new Schema ({
    nombre: {
        type: String,
        required: true
    },
    contacto:{
        type: String,
        required: true
    },
    nombreinscr:{
        type: String,
        required: true
    },
    emailinscr:{
        type: String,
        required: true
    },
    cupon:{
        type: String,
    }


},{
    timestamps: true
})

module.exports = model('Inscripcion', InscripcionSchema);