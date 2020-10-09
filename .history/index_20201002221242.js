const express = require('express')
require('dotenv').config();
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

console.log(process.env);


app.use(cors())
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }))



const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})