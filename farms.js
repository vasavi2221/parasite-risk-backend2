const express = require("express");
const router = express.Router();

const farms = require("../data/farms.json");
const { getWeather } = require("../services/weatherService");
const { calculateRisk } = require("../services/riskService");

router.get("/", async (req, res) => {
  try {
    const results = [];

    for (const farm of farms) {
      const weather = await getWeather(farm.lat, farm.lng);
      const risk = calculateRisk(weather);

      results.push({
        ...farm,
        weather,
        risk
      });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;