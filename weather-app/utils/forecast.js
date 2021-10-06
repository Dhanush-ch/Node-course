const request = require("request");

const forecast = (lat, lon, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=62513241115c9d5204003e52c444f15b&query=" +
    lat +
    "," +
    lon;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(
        "There might be some error, Check your internet connection!",
        undefined
      );
    } else if (error) {
      callback("Cannot find the location, Enter correct values!", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degree celcius out. There is " +
          body.current.feelslike +
          "% chance of rain."
      );
    }
  });
};

module.exports = {
  forecast: forecast,
};
