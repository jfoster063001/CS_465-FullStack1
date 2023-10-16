const axios = require('request');
const { request } = require('../../app');
const apiOptions = {
 server: 'http://localhost:3000'
};

const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips exist in our database!';
        }
    }
    res.render('travel',
        {
            activePage: 'travel',
            title: pageTitle,
            trips: responseBody,
            message
        }
    );
}

const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>>travelController.travelList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { stausCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};

module.exports = {
    travelList
};
