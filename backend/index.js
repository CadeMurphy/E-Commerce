const db = require('./db/index')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users/:id', db.getUserById)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })