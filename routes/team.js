const express = require('express');
const router = express.Router();

const { teamSearch, teamData} = require('../controllers/team');

router.route('/teamsearch/:name').get(teamSearch);
router.route('/teamdata/:id').get(teamData);

module.exports = router;
