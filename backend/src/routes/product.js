const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createProduct } = require('../controllers/product');
const multer = require('multer');
// const upload = multer({dest:'uploads/'})
const router = express.Router();
const shortid = require('shortid');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage})



router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPicture'),createProduct);
module.exports = router;