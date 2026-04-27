const express = require("express");
const cors = require("cors");

const farmRoutes = require("./routes/farms");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/farms", farmRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});