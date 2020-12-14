const {Router} = require('express');
const router = Router();


const {renderSignUpForm, renderSigninForm, signup, signin, logout, fbsignin, fbsigninValid} = require ('../controllers/auth.controller')


router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signup);

router.get('/users/signin', renderSigninForm);

router.post('/users/signin', signin);

router.get('/users/fbSignin', fbsignin);

router.get('/users/fbSignin/Valid', fbsigninValid);

router.get('/users/logout', logout);





module.exports = router;