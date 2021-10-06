const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (address) {
  geocode.geocode(address, (error, response) => {
    if (error) {
      return console.log(error);
    }

    forecast.forecast(
      response.latitude,
      response.longitude,
      (error, forecastData) => {
        if (error) {
          return console.log(error);
        }
        console.log(response.location);
        console.log(forecastData);
      }
    );
  });
} else {
  console.log("Please provide the address!");
}
