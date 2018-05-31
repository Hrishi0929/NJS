const request = require('request');

var getWeather =( lat,lng ,callback) => {
    request({
        url : `https://api.darksky.net/forecast/5389768bf3982229c2020a51db6112dd/${lat},${lng}` ,
        json: true
      },(error, response,body) => {
        if(!error && response.statusCode === 200){
        //printing the temperature from the dark sky api
        callback(undefined,{
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
            });
        }else{
          callback('Unable to fetch weather.');
        }
    });
}

module.exports = {
    getWeather
}