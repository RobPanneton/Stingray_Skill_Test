const express = require("express");

const app = express();

app.use(express.json());

const swimlaneData = require("./data/swimlanes.json");

app.get("/api/swimlanes", async (req, res) => {
  res.json(swimlaneData);
});

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is not what you were looking for.",
  });
});

// Start the server
app.listen(3100, () => {
  console.log(`Starting the api on port 3100`);
});
