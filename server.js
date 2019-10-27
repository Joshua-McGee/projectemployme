require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})