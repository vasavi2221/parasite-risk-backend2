const calculateRisk = (weather) => {
  if (!weather) return "Unknown";

  let score = 0;

  // Simple rules (as required by brief)
  if (weather.temperature > 10) score += 1;
  if (weather.windspeed < 20) score += 1;

  if (score >= 2) return "High";
  if (score === 1) return "Medium";
  return "Low";
};

module.exports = { calculateRisk };