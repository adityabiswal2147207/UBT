const Product = require('../models/product');
const shortid = require('shortid');
const slug = require('slugify');
const { default: slugify } = require('slugify');

exports.createProduct = (req,res)=>{

    const {
        name, price, description, productPicture, category, createdBy, quantity
     } = req.body;



    const product = new Product ({
        name:name,
        slug: slug(name),
        price,
        quantity,
        description,
        productPicture,
        category,
        createdBy: req.user._id
    });

    product.save(((error, product)=>{
        if(error)
        {
            res.status(400).json({error});
        }
        else{
            res.status(201).json(product);
        }
    }));

};