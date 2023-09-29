const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/trips');

/* GET home page. */
router
    .route('/trips')
    .get(tripsController.tripsList);

module.exports = router;
