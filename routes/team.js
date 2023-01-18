const express = require('express');
const router = express.Router();

const { teamSearch, teamData, getSquad, getTransfers} = require('../controllers/team');

router.route('/teamsearch/:name').get(teamSearch);
router.route('/teamdata/:id').get(teamData);
router.route('/teamsquad/:id').get(getSquad);
router.route('/teamtransfers/:id').get(getTransfers);

module.exports = router;
