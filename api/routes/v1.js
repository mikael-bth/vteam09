const express = require('express');
const router = express.Router();

const index = require('./v1/index');
const scooters = require('./v1/scooters');
const scooter = require('./v1/scooter');

router.use('/', index);
router.use('/scooters', scooters);
router.use('/scooter', scooter);

module.exports = router;