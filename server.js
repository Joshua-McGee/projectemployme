require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let PORT = process.env.PORT;

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  //Set static folder
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
