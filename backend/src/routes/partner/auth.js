const express = require('express');
const { signup, signin } = require('../../controllers/partner/auth');
const router = express.Router();




router.post('/partner/signup',signup);

router.post('/partner/signin',signin);



module.exports = router;