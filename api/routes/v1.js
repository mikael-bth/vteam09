const express = require('express');
const router = express.Router();

const index = require('./v1/index');
const scooters = require('./v1/scooters');
const scooter = require('./v1/scooter');
const users = require('./v1/users');
const user = require('./v1/user');

router.use('/', index);
router.use('/scooters', scooters);
router.use('/', scooter);
router.use('/users', users);
router.use('/', user);

module.exports = router;