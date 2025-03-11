const express = require('express');

const router = express();

const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-route')
const cityRoutes = require('./city-routes')
router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);


router.get('/info', InfoController.info)

module.exports = router;