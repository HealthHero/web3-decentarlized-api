const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 9090
const db = require("./database/models");

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
require('./routes')(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })