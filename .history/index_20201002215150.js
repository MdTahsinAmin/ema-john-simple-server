const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')

const app = express()

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