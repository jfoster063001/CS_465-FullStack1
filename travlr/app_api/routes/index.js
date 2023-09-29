const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

/* GET home page. */
router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripcode')
    .get(tripsController.tripsFindByCode);


module.exports = router;
