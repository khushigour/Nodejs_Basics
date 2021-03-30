const express = require('express');
const path = require('path');
const router = express.Router();

const rootDIR = require('../util/path');

router.get('/add-product', (req, res, next)=> {
    res.sendFile(path.join(rootDIR,'views','add-product.html'));
 }); 
 
router.post('/add-product', (req, res)=>{
     res.redirect('/');
 });


 module.exports = router;