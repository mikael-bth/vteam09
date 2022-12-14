const express = require('express');
const router = express.Router();

const index = require('./v1/index');
const scooters = require('./v1/scooters');

router.use('/', index);
router.use('/scooters', scooters)

module.exports = router;