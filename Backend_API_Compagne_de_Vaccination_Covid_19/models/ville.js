const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const villeSchema = new Schema({
  
  ville: {
    type: String,
    default: null
  },
  region_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "region"
  },

  
}, { timestamps: true });

const ville = mongoose.model('ville', villeSchema);
module.exports = ville;