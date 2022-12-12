/*const initialst = {};
const passport = require('passport');
const Role = require('../models/Role')
const User = require('../models/User')
const roles = 'moderator';
initialst.createRoles = async()=>{
   
    try {
        
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;
    
        const values = await Promise.all([
            new Role({name: 'user'}).save(),
            new Role({name: 'moderator'}).save(),
            new Role({name: 'adminrole'}).save(),
        ]);

      //  console.log(values);

    } catch (error) {

        console.error(error);  

    }

};


initialst.createAdmin = async()=>{
   
    const count = await User.estimatedDocumentCount()

        if (count > 0) return;


    try {
        
        
        const newUser1 = await new User({name: 'Luis Alexander', email: 'dolphintareas@gmail.com', lastname: 'Gonzales Davila', telefono: '974664178', pais: 'Perú'}).save(),  

        foundRoles = await Role.find({name: {$in: roles}})
        newUser1.roles = foundRoles.map(roles => roles._id)
        newUser1.password = await newUser1.encryptPassword(process.env.USER_1_ENCRYPT)
        await newUser1.save();

       // console.log(newUser1);

    } catch (error) {

        console.error(error);  

    }

    try {
        
        const newUser2 = await new User({name: 'Roger Alberto', email: 'rogermuguerza@gmail.com', password: 'alberto_roger7',lastname: 'Muguerza Gonzalez', telefono: '990012243', pais: 'Perú'}).save(),

        foundRoles = await Role.find({name: {$in: roles}})
        newUser2.roles = foundRoles.map(roles => roles._id)
        newUser2.password = await newUser2.encryptPassword(process.env.USER_2_ENCRYPT)
        await newUser2.save();

       // console.log(newUser2);

    } catch (error) {

        console.error(error);  

    }
};


module.exports = initialst;*/