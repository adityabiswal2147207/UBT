const express = require('express');
const { signup, signin } = require('../../controllers/buddies/auth');
const router = express.Router();




router.post('/buddies/signup',signup);

router.post('/buddies/signin',signin);



module.exports = router;