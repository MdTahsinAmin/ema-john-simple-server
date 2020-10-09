const express = require('express')
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const cors = require('cors')
const bodyParser = require('body-parser')

const uri = `mongodb+srv://${procces.env.DB_USER}:${procces.env.DB_PASSWORD}@cluster0.ntqwp.mongodb.net/${procces.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

const app = express()
//app.use(cors())
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }))

const port = 5000;




client.connect(err => {
  const collection = client.db(`${procces.env.DB_NAME}`).collection("products");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})