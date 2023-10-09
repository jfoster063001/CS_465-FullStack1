const axios = require('axios');
const apiOptions = {
 server: 'http://localhost:3000'
};


/*
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

*/
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if(!(responseBody instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length){
            message = 'No trips exist in our database!';
        }
    }
    res.render('travel',
    {
        title: pageTitle,
        trips: responseBody,
        message
    }
    );
}

const travelList = async (req, res) => {
   const path = '/api/trips';
   const requestOptions ={
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
   };
   console.info('>>travelController.traveList calling' + requestOptions.url);
   console.log('line 41 in controller travel.js');
   try {
    const response = await axios(requestOptions);
    renderTravelList(req, res, response.data);
  } catch (error) {
    console.error(error);
    renderTravelList(req, res, []);
  }
};
   