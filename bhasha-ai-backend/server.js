const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Load your API route
const aiRoute = require("./api/ask");

app.post("/chat", aiRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
