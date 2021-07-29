const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/squad', (req, res) => {
    res.render('squad');
});

module.exports = router;
