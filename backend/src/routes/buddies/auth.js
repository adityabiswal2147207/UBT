const express = require('express');
const { signup, signin } = require('../../controllers/buddies/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();




router.post('/buddies/signup',validateSignupRequest,isRequestValidated,signup);

router.post('/buddies/signin',validateSigninRequest,isRequestValidated,signin);



module.exports = router;