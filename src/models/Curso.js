const{model, Schema} = require('mongoose')

const cursoSchema = new Schema ({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type:Number,
        
    },
    inicio: {
        type: String,
      
    },
    contenido: {
        type: String,
        required: true
    },
    contacto:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('Curso', cursoSchema);