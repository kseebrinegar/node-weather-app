const request = require('request');

var getWeather = (cordinates, callback) => {
	request({
	  url: `https://api.darksky.net/forecast/b8f75df6fdb9410c25cdbe1278818b33/${cordinates.lat},${cordinates.lng}`,
	  json: true
	}, (error, response, body) => {
	  if (!error && response.statusCode === 200) {
	  	callback(undefined, body.currently.temperature) 
	    
	  } else {
	  	callback('Unable to fetch weather.')
	  }
	 
	});
};

module.exports.getWeather = getWeather;
