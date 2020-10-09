const express = require('express')

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const cors = require('cors')
const bodyParser = require('body-parser')

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ntqwp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


client.connect(err => {
  const productCollections = client.db(`${process.env.DB_NAME}`).collection("products");
  console.log('Database connected')
  app.post('/addProduct', (req , res) =>{
    const product = req.body;
    //console.log(product);
    productCollections.insertOne(product)
    .then(result => {
       console.log(result);
    })
 })

});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})