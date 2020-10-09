const express = require('express')

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

require('dotenv').config();

const cors = require('cors')
const bodyParser = require('body-parser')

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ntqwp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const app = express()
app.use(cors())
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }))


client.connect(err => {
  const productCollections = client.db(`${process.env.DB_NAME}`).collection("products");
  //console.log('Database connected')
  app.post('/addProduct', (req , res) =>{
    const shopItems = req.body;
    //console.log(product);
    productCollections.insertMany(shopItems)
    .then(result => {
       console.log(result.insertedCount);
       res.send(result.insertedCount)
    })
 })

 app.get('/products',(req, res)=>{
      productCollections.find({}).toArray((err,documents)=>{
        res.send(documents);
      })
 })

 app.get('/products/:key',(req,res)=>{
      productCollections.find({key: req.params.key})
      .toArray((err,documents)=>{
           res.send(documents);
      })
 })

});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})