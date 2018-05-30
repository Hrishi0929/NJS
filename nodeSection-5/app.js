// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help','h')
//   .argv;
// //console.log(argv);

// geocode.geocodeAddress(argv.address,(errorMessage,results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require('request');

request({
  url : 'https://api.darksky.net/forecast/5389768bf3982229c2020a51db6112dd/13.10197,77.5863591',
  json: true
},(error, response,body) => {
  if(!error && response.statusCode === 200){
  //printing the temperature from the dark sky api
  console.log(`temperature: ${body.currently.temperature}`);
  } else {
    console.log('Unable to fetch weather.');
  }

});

//5389768bf3982229c2020a51db6112dd

