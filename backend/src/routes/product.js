const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createProduct } = require('../controllers/product');
const multer = require('multer');
const path = require('path');
//const { addCategory, getCategories } = require('../controllers/category');
const router = express.Router();
const shortid = require('shortid');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })

  const upload = multer({storage});
  


router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPicture'),createProduct);
//router.get('/category/getcategory',getCategories);

module.exports = router;