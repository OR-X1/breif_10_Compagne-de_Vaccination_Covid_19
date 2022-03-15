const express = require('express')
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv')
var cors = require('cors')


dotenv.config({
  path: './.env'
})


const dbURI = "mongodb://127.0.0.1:27017/breif10_vaccination_covid_19";
app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());



app.use('/api/user', require('./routes/beneficiary'));
app.use('/api/resporegion', require('./routes/respo_region'));
app.use('/api/admin_natinal', require('./routes/admin_national'));
app.use('/api/region', require('./routes/region'));
app.use('/api/ville', require('./routes/ville'));
app.use('/api/centre', require('./routes/centre'));





mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000, () => {
    console.log('mongodb is connected')
    console.log("Up Server : http://localhost:3000")
    }) )
  .catch(err => {
    console.log("mondb not connected");
    console.log(err)
  });