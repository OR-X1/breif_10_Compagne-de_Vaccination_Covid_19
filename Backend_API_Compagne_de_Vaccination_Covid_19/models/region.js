const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema = new Schema({
  
  region: {
    type: String,
    default: null
  },
  
}, { timestamps: true });

const region = mongoose.model('region', regionSchema);
module.exports = region;