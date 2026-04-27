const axios = require("axios");

const getWeather = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
    );

    return response.data.current_weather;
  } catch (error) {
    console.error("Weather API error:", error.message);
    return null;
  }
};

module.exports = { getWeather };