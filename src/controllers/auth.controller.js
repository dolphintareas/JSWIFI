/*const authCtrl = {};
const passport = require('passport');

const User = require('../models/User')
const Role = require('../models/Role')
const jwt = require('jsonwebtoken');
const config = require('../config');

authCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup',{titlepage: 'Registrate en Woom'});
}

authCtrl.signup = async (req, res) =>{
    const errors = [];
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const {name, lastname, email, telefono, pais, password, confirm_password , roles} = req.body;
    
    if(name.length < 3){
        errors.push({text:'Ingresa un nombre válido'});  
    }

    if(!regexEmail.test(email)){
        errors.push({text:'Ingresa un email válido'});  
    }

    if (password != confirm_password){
        errors.push({text:'Contraseñas no coinciden'});        
    }
    if (password.length < 8) {
        errors.push({text: 'Tu contraseña debe tener mínimo 8 caracteres'});
    }


   
    if (errors.length>0){
        res.render('users/signup',{
            errors,
            name,
            lastname,
            email,
            telefono,
            pais,
            password,
            confirm_password
        })
    } else{
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash('error_msg', 'Este usuario ya ha sido registrado');
            res.redirect('/users/signup');
        } else {
            const newUser = new User ({name, lastname, email, telefono, pais, password});
            
            newUser.password = await newUser.encryptPassword(password)
            
            
           

            if (roles){
                const foundRoles = await Role.find({name: {$in: roles}})
                newUser.roles = foundRoles.map(roles => roles._id)
            }   else {
                const role = await Role.findOne({name:"user"})
                newUser.roles = [role._id];
            }
          
            const savedUser =await newUser.save();
            console.log(newUser);
            req.userId = savedUser.id;

            const token = jwt.sign({id: savedUser._id}, config.SECRET,{
                expiresIn: 86400 //24 horas
            })
          
               // res.json({token})
          
            
            req.flash('success_msg', 'Estás registrado');
            res.redirect('/users/signin');
        }
    }
};

    authCtrl.renderSigninForm = (req, res) => {
        
        res.render('users/signin',{titlepage: 'Inicia sesión en Woom'});
    }

    authCtrl.signin = passport.authenticate('local', {
        failureRedirect: '/users/signin',
        successRedirect: '/notes',
        failureFlash: true

        
    });

    authCtrl.fbsignin = passport.authenticate('facebook', {scope:['email']});
    
    authCtrl.fbsigninValid = passport.authenticate('facebook', { 
        successRedirect: '/notes',
        failureRedirect: '/users/signin' 
    });

  

    authCtrl.logout = (req, res) => {
        req.logout();
        req.flash('success_msg', 'Has finalizado la sesión');
        res.redirect('/users/signin');
    }

   
  
    module.exports = authCtrl;*/