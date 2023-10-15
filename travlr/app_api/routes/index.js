const express = require('express');
const router = express.Router();

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

/* GET home page. */
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripcode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);


module.exports = router;
