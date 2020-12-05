const helpers = {};
const User = require('../models/User')
const Role = require('../models/Role')

helpers.isAuthenticated = (req, res, next) =>{
    if (req.isAuthenticated()){
        
        return next();
    }
    req.flash('error_msg','Inicia sesión primero')
    res.redirect('/users/signin');
};

helpers.verifyToken = async(req, res, next) =>{
    
}

helpers.isModerador = async(req, res, next) =>{
    const user = await User.findById(req.user.id)
    const roles = await Role.find({_id: {$in: user.roles}})
    //console.log (roles);
    for (let i=0; i<roles.length; i++){
        if(roles[i].name === "moderator"){
            next();
            return;
        }
    }

    req.flash('error_msg','No tienes permisos')
    res.redirect('/users/signin');
    
}

helpers.isAdmin = async(req, res, next) =>{
    
    const user = await User.findById(req.user.id)
    const roles = await Role.find({_id: {$in: user.roles}})
   // console.log (roles);
    for (let i=0; i<roles.length; i++){
        if(roles[i].name === "adminrole"){
            next();
            return;
        }
    }

    req.flash('error_msg','No tienes permisos')
    res.redirect('/users/signin');
}

module.exports = helpers;