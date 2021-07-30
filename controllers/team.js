/* eslint-disable no-unused-vars */
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

exports.teamSearch = async (req, res, next) => {
    const opt = {
        method: 'GET',
        url: 'https://sofascore.p.rapidapi.com/teams/search',
        params: {name: req.params.name},
        headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': 'sofascore.p.rapidapi.com'
        }
    };

    axios.request(opt).then(function (response) {
        res.send({ success: true, data: response.data});
    }).catch(function (error) {
        console.error(error);
    });
};

exports.teamData = async (req, res, next) => {
    const opt = {
        method: 'GET',
        url: 'https://sofascore.p.rapidapi.com/teams/detail',
        params: {teamId: req.params.id},
        headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': 'sofascore.p.rapidapi.com'
        }
    };

    axios.request(opt).then(function (response) {
        res.send({ success: true, data: response.data});
    }).catch(function (error) {
        console.error(error);
    });
};

exports.getSquad = async (req, res, next) => {
    const opt = {
        method: 'GET',
        url: 'https://sofascore.p.rapidapi.com/teams/get-squad',
        params: {teamId: req.params.id},
        headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': 'sofascore.p.rapidapi.com'
        }
    };

    axios.request(opt).then(function (response) {
        res.send({ success: true, data: response.data});
    }).catch(function (error) {
        console.error(error);
    });
};
