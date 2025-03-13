const express = require('express');

const router = express();

const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-route')
const cityRoutes = require('./city-routes')
const airportRoutes = require('./airport-route')
const flightRoutes = require('./flight-route')
router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);
router.use('/flights', flightRoutes);


router.get('/info', InfoController.info)

module.exports = router;