const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/squad', (req, res) => {
    const id = req.query.id;

    var opt = {
        method: 'GET',
        url: `http://localhost:4567/api/v1/team/teamsquad/${id}`,
    };

    axios.request(opt).then(function (resp) {
        res.set('Content-Type', 'text/html');
        res.render('squad', {squad: resp.data.data});
    }).catch(function (error) {
        console.error(error);
    });
});

router.get('/transfers', (req, res) => {
    const id = req.query.id;

    var opt = {
        method: 'GET',
        url: `http://localhost:4567/api/v1/team/teamtransfers/${id}`,
    };

    axios.request(opt).then(function (resp) {
        res.set('Content-Type', 'text/html');
        console.log(resp.data.data);
        res.render('transfers', {transfers: resp.data.data});
    }).catch(function (error) {
        console.error(error);
    });
});

module.exports = router;
