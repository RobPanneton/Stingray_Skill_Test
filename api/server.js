const express = require("express");

const app = express();

app.use(express.json());

const swimlaneData = require("./data/swimlanes.json");

app.get("/api/swimlanes", async (req, res) => {
  let stringified = JSON.stringify(swimlaneData);

  stringified = stringified.replaceAll(/&rsquo;|&lsquo;/gm, "'");
  stringified = stringified.replaceAll("&amp;", "&");

  const fixedSwimlaneData = JSON.parse(stringified);

  res.json(fixedSwimlaneData);
});

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is not what you were looking for.",
  });
});

// Start the server
app.listen(8080, () => {
  console.log(`Starting the api on port 3100`);
});
