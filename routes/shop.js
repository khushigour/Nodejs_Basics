const express = require('express');
const path = require('path');
const router = express.Router();

const rootDIR = require('../util/path');

router.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDIR,'views','shop.html'));
});

module.exports = router;


