const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); 
//It registers themiddleware and will call next so it reaches out middleware before that it will do body parsing but it will not parse all types...

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);