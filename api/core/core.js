
// set up require
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const Schema = mongoose.Schema;
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

var mongoDB = 'mongodb+srv://dev:re1VqBVDudd37dMq@cluster0.tbrfk.mongodb.net/MyTest?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// export all
module.exports.app = app;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;