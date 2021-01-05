const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

const Schema = mongoose.Schema;
var mongoDB = 'mongodb+srv://dev:re1VqBVDudd37dMq@cluster0.tbrfk.mongodb.net/MyTest?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });


const ItemSchema = new Schema({
  vacancyTitle: String,
  companyName: String,
  salary: String,
  street: String,
  town: String,
  city: String,
  postcode: String
});

const JobModel = mongoose.model("jobs", ItemSchema);


app.get('/', async function (req, resp) {
  try {
    const jobs = await JobModel.find();
    resp.status(200).json(jobs);
  }
  catch {
    resp.status('200').json('error')
  }
});

app.post('/', async function (req, resp) {
  JobModel.create(req.body)
    .then(result => {
      resp.status(200).json(req.body);
    })
    .catch(error => {
      resp.status('200').json('error');
    })
});

app.put('/', async function (req, resp) {
  let idToUpdate = req.body._id;

  resp.status('200').json(idToUpdate + ' NOT IMPLEMENTED');
});

app.delete('/', async function (req, resp) {
  let idToUpdate = req.body._id;

  resp.status('200').json(idToUpdate + ' NOT IMPLEMENTED');
});

app.listen(4000, () => { console.log('server started') })
