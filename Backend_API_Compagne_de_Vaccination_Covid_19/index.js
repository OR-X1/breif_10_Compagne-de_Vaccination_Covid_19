const express = require('express')
const app = express();
const mongoose = require('mongoose');
var cors = require('cors')



const dbURI = "mongodb://127.0.0.1:27017/breif10_vaccination_covid_19";
app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());



app.use('/api/user', require('./routes/beneficiary'));
app.use('/api/resporegion', require('./routes/respo_region'));
app.use('/api/region', require('./routes/region'));





mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000, () => {
    console.log('mongodb is connected')
    console.log("Up Server : http://localhost:3000")
    }) )
  .catch(err => {
    console.log("mondb not connected");
    console.log(err)
  });