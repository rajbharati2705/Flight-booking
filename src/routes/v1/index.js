const express = require('express');

const router = express();

const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-route')
router.use('/airplanes', airplaneRoutes)

router.get('/info', InfoController.info)

module.exports = router;