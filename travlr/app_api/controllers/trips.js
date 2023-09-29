const mongoose = require('mongoose');
const Model = mongoose.model('trips');

//get list of trips
const tripsList = async (req, res) => {
    Model
        .find({})//empty filter
        .exec((err, trips) => {
            if (trips.length === 0){
                return res
                    .status(404)
                    .json({"message":"Trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else{
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

//trips by code
const tripsFindByCode = async (req, res) => {
    Model
        .find({'code': req.params.tripcode })
        .exec((err, trip) => {
            if (trip.length === 0){
                return res
                    .status(404)
                    .json({"message":"Trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else{
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

module.exports = {
    tripsList,
    tripsFindByCode
};