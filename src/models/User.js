/*const {Schema, model} = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    lastname: {type: String},
    telefono: {type: String},
    pais: {type: String},
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }],
}, {
    timestamps: true,
    versionKey: false
});

UserSchema.plugin(findOrCreate);

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
    
};

UserSchema.methods.matchPassword= async function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', UserSchema);*/