const passport = require('passport');

const jwt = require('jsonwebtoken');
const config = require('../config');

const LocalStrategy = require ('passport-local').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;


const User = require('../models/User')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passportField: 'password'
}, async (email,password,done) =>{

    //Match Email's user
    const user = await User.findOne({email}).populate("roles");
    
    if (!user) {
        return done(null, false, {message: 'El usuario no existe por favor registrate'});
    } else {
        //Match Password'S User
        const match = await user.matchPassword(password)
       
       
       
        if (match){
            return done(null, user);
            
        } else {
            return done(null, false, {message: 'Tu contraseña es incorrecta, vuelve a intentarlo'});
        }
        
        
    }
    
}));

/*passport.use(new FacebookStrategy({
    clientID: process.env.CLIENT_ID_FB,
    clientSecret: process.env.CLIENT_SECRET_FB,
    callbackURL: "/users/fbSignin/Valid",
    profileFields: ['id', 'emails', 'displayName']
  },
  async (accessToken, refreshToken, profile, done) => {
          
    await User.findOne({email: profile.emails[0].value}, (err, user)=>{
                    if (err)
                    return done(err);
    
                    if ( user)  {
                                    
                                    return done(null, user);
                                } 
                        
                    else        {      
                                newUser = new User({id: profile.id, name: profile.displayName, lastname: profile.name.familyName, email: profile.emails[0].value});
                                newUser.save( function(err){
                                    if (err)
                                    throw err;
                                    
                                    return done(null, newUser);
                                });
                                
                                }
                            

});
  }));*/


passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id, (err, user)=>{
        done(err,user);
    })
});