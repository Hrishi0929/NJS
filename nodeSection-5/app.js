const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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
//console.log(argv);

// geocode.geocodeAddress(argv.address,(errorMessage,results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

weather.getWeather(13.10197,77.5863591,(error, weatherResults) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(weatherResults,undefined, 2));
  }
});


