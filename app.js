const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); 
//It registers themiddleware and will call next so it reaches out middleware before that it will do body parsing but it will not parse all types...

app.use('/add-product', (req, res, next)=> {
   console.log('Add product');
   res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body></html>');
}); 

app.post('/product', (req, res)=>{
    console.log(req.body);
    res.redirect('/')
});

app.use('/',(req, res, next) => {
    // console.log('In another middleware');
    res.send('<h1> Hello from express </h1>');
});

app.listen(3000);