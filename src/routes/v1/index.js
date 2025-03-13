const express = require('express');

const router = express();

const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-route')
const cityRoutes = require('./city-routes')
const airportRoutes = require('./airport-route')
router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);


router.get('/info', InfoController.info)

module.exports = router;