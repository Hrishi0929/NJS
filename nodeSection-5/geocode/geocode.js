const request = require('request');

var geocodeAddress = (address,callback) => {
    //we used the encodeURI to encode the normal address to the address that the
//browser understands
//option 1
 var encodedAddress = encodeURIComponent(address);
 console.log(encodedAddress);
//option 2
//var encodedAddress = encodeURIComponent(argv.a);
//console.log(encodedAddress);

request({
  //option-1 to pass url
  //url: 'https://maps.googleapis.com/maps/api/geocode/json?address= ' +encodedAddress,
  //option-2 to pass url using template strings 
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  //adding else if statements in the callback for error handling
  if (error) {
      //replace the console.log error with the callback errorMessage 
      //that we have defined in the app.js file
      callback('Unable to connect to the google servers');
    //console.log('Unable to connect to the google servers');
    //we  have to use body.status to handle the errors made by the users
    //as sometimes they might type the wrong address and google will
    //display "ZERO_RESULTS" instead of errors
  } else if(body.status === 'ZERO_RESULTS') {
    callback('Unable to find that address.');
    //console.log('Unable to find that address.');
  } else if(body.status === 'OK') {
      callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
      });
  //console.log(JSON.stringify(body, undefined, 2));
//    console.log(`Address: ${body.results[0].formatted_address}`);
//    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
//    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
});
}

module.exports = {
    geocodeAddress
};