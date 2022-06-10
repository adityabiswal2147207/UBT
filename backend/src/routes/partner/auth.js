const express = require('express');
const { signup, signin } = require('../../controllers/partner/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();




router.post('/partner/signup',validateSignupRequest,isRequestValidated,signup);

router.post('/partner/signin',validateSigninRequest,isRequestValidated,signin);



module.exports = router;