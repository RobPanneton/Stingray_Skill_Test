const express = require("express");

const app = express();

app.use(express.json());

const swimlaneData = require("./data/swimlanes.json");

app.get("/api/swimlanes", async (req, res) => {
  res.json(swimlaneData);
});

// Start the server
app.listen(3100, () => {
  console.log(`Starting the api on port 3100`);
});
