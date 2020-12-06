const {Router} = require('express');
const router = Router();


const {renderSignUpForm, renderSigninForm, signup, signin, logout, fbsignin, fbsigninValid, renderPaymentForm, Payment} = require ('../controllers/auth.controller')


router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signup);

router.get('/users/signin', renderSigninForm);

router.post('/users/signin', signin);

router.get('/users/fbSignin', fbsignin);

router.get('/users/fbSignin/Valid', fbsigninValid);

router.get('/users/logout', logout);

router.get('/users/payment', renderPaymentForm);

router.post('/users/payment', Payment);



module.exports = router;