const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;
console.log(argv);

//we used the encodeURI to encode the normal address to the address that the
//browser understands
//option 1
var encodedAddress = encodeURIComponent(argv.address);
console.log(encodedAddress);
//option 2
var encodedAddress = encodeURIComponent(argv.a);
console.log(encodedAddress);

request({
  //option-1 to pass url
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address= ' +encodedAddress,
  //option-2 to pass url using template strings 
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  //console.log(JSON.stringify(body, undefined, 2));
   console.log(`Address: ${body.results[0].formatted_address}`);
   console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
   console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});

