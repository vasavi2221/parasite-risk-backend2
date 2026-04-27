# Elanco Parasite Risk Map - Prototype

This is a web-based prototype designed to visualize parasite risk indicators for UK pastures.

### How it Works:
- **Backend**: Built with Node.js and Express.
- **Data**: Farm locations are managed via MongoDB and served through `farms.js`.
- **Integration**: Real-time weather is fetched using `weatherService.js`.
- **Logic**: A transparent, rule-based risk indicator is applied in `riskService.js`.
